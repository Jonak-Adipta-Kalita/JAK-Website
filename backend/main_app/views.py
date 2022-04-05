from django.http import HttpRequest, HttpResponse
from rest_framework import (
    generics,
    response,
    status,
    permissions,
    views as restframework_views,
)
from django.contrib.auth import models as auth_models
from .models import Notification, Contact
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

            if not auth_models.User.objects.filter(username=username).exists():
                user = auth_models.User.objects.create_user(
                    first_name=first_name,
                    last_name=last_name,
                    username=username,
                    email=email,
                    password=password,
                )

                user.save()

                if auth_models.User.objects.filter(username=username).exists():
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
