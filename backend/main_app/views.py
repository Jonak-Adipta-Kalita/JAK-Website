from django.http import HttpRequest, HttpResponse
from rest_framework import generics
from .models import Contact, Project
from .serializers import ContactSerializer, ProjectSerializer
import credentials


def index(request: HttpRequest):
    return HttpResponse(
        f"<h3>Using as Backend for <a href={credentials.FRONTEND_PORTS[0]}>this site</a></h3>"
    )


class ContactAPIView(generics.CreateAPIView):
    serializer_class = ContactSerializer

    def get_queryset(self):
        return Contact.objects.all()


class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all()
