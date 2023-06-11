from django.http import HttpRequest, HttpResponse
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import EmailMessage
from django.utils.encoding import (
    force_bytes,
    force_text,
)
from .utils import generate_token
from rest_framework import (
    generics,
    response,
    status,
    permissions,
    views as restframework_views,
)
from .models import Notification, Contact, User
from .serializers import (
    NotificationSerializer,
    ContactSerializer,
    UserSerializer,
)
import credentials


def index(request: HttpRequest):
    return HttpResponse(
        f"<h3>Using as Backend for <a href={credentials.FRONTEND_PORTS[0]}>this site</a></h3>"
    )


class NotificationListAPIView(generics.ListAPIView):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.all()


class ContactAPIView(generics.CreateAPIView):
    serializer_class = ContactSerializer

    def get_queryset(self):
        return Contact.objects.all()


class RegisterView(restframework_views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            data = request.data

            first_name: str = data["first_name"]
            last_name: str = data["last_name"]
            username: str = data["username"]
            email: str = data["email"]
            password: str = data["password"]

            if not User.objects.filter(username=username).exists():
                user = User.objects.create_user(
                    first_name=first_name,
                    last_name=last_name,
                    username=username,
                    email=email,
                    password=password,
                )

                user.save()

                if User.objects.filter(username=username).exists():
                    return response.Response(
                        {"success": "Account created successfully"},
                        status=status.HTTP_201_CREATED,
                    )
                else:
                    return response.Response(
                        {"error": "Something went wrong when trying to create account"},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    )
            else:
                return response.Response(
                    {"error": "Username already exists"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except:
            return response.Response(
                {"error": "Something went wrong when trying to register account"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class LoadUserView(restframework_views.APIView):
    def get(self, request, format=None):
        try:
            user = request.user
            user = UserSerializer(user)

            return response.Response({"user": user.data}, status=status.HTTP_200_OK)
        except:
            return response.Response(
                {"error": "Something went wrong when trying to load user"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class SendVerificationEmail(restframework_views.APIView):
    def post(self, request):
        try:
            email = request.data["email"]
            user = User.objects.filter(email=email).get()

            if not user.is_email_verified:
                current_site = credentials.PORTS[0]
                email_subject = "Activate your Account!!"
                email_body = render_to_string(
                    "auth/send_verification_email.html",
                    {
                        "user": user,
                        "domain": current_site,
                        "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                        "token": generate_token.make_token(user),
                    },
                )

                email = EmailMessage(
                    subject=email_subject,
                    body=email_body,
                    from_email=credentials.EMAIL_HOST,
                    to=[user.email],
                )
                email.send()

                return response.Response(
                    {"success": "Verification EMail link sent"},
                    status=status.HTTP_200_OK,
                )
            else:
                return response.Response(
                    {"success": "User is already EMail Verified"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except Exception as e:
            return response.Response(
                {
                    "error": f"Something went wrong when trying to check if email is verified: {str(e)}"
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class VerifyEmail(restframework_views.APIView):
    def get(self, request):
        user: User = None
        try:
            uid = force_text(urlsafe_base64_decode(request.GET["uidb64"]))

            user = User.objects.get(pk=uid)

            if user and generate_token.check_token(user, request.GET["token"]):
                user.is_email_verified = True
                user.save()

                return response.Response(
                    {
                        "success": f"The EMail: {user.email} is Verified!! You may Login now!!"
                    },
                    status.HTTP_200_OK,
                )
        except Exception as e:
            print(e)
            return response.Response(
                {"error": f"Something went wrong when trying to verify email"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class IsEmailVerifiedView(restframework_views.APIView):
    def post(self, request):
        try:
            email = request.data["email"]
            user = User.objects.filter(email=email).get()

            is_email_verified: bool = user.is_email_verified
            return response.Response(
                {"is_email_verified": is_email_verified}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return response.Response(
                {
                    "error": f"Something went wrong when trying to check if email is verified: {str(e)}"
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class ChangePassword(restframework_views.APIView):
    def post(self, request):
        try:
            username = request.data["username"]
            email = request.data["email"]
            current_password = request.data["currentPassword"]
            new_password = request.data["newPassword"]

            user = User.objects.filter(email=email).get()
            if user.username == username and user.password == current_password:
                user.set_password(new_password)
                user.save()

            return response.Response(
                {"success": "Changed Password!!"}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return response.Response(
                {
                    "error": f"Something went wrong when trying to change password: {str(e)}"
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
