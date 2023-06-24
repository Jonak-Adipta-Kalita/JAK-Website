from django.http import HttpRequest, HttpResponse
from rest_framework import generics
from .models import Notification, Contact, Project
from .serializers import NotificationSerializer, ContactSerializer, ProjectSerializer
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


class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all()
