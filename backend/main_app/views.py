from django.http import HttpRequest, HttpResponse
from rest_framework import generics, response, status, authentication, permissions
from .models import Game_Own, Game_Fav, Notification, My_Photo, Contact
from .serializers import (
    GameOwnSerializer,
    GameFavSerializer,
    NotificationSerializer,
    MyPhotoSerializer,
    ContactSerializer,
)
import credentials


def index(request: HttpRequest):
    return HttpResponse(
        f"<h3>Using as Backend for <a href={credentials.FRONTEND_PORTS[0]}>this site</a></h3>"
    )


class GameOwnListAPIView(generics.ListAPIView):
    serializer_class = GameOwnSerializer

    def get_queryset(self):
        return Game_Own.objects.all()


class GameOwnDetailAPIView(generics.GenericAPIView):
    serializer_class = GameOwnSerializer

    def get(self, request, id):
        query_set = Game_Own.objects.filter(id=id).first()

        if query_set:
            return response.Response(self.serializer_class(query_set).data)
        return response.Response("Not found", status=status.HTTP_404_NOT_FOUND)


class GameFavListAPIView(generics.ListAPIView):
    serializer_class = GameFavSerializer

    def get_queryset(self):
        return Game_Fav.objects.all()


class GameFavDetailAPIView(generics.GenericAPIView):
    serializer_class = GameFavSerializer

    def get(self, request, id):
        query_set = Game_Fav.objects.filter(id=id).first()

        if query_set:
            return response.Response(self.serializer_class(query_set).data)
        return response.Response("Not found", status=status.HTTP_404_NOT_FOUND)


class NotificationListAPIView(generics.ListAPIView):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.all()


class MyPhotoListAPIView(generics.ListAPIView):
    serializer_class = MyPhotoSerializer

    def get_queryset(self):
        return My_Photo.objects.all()


class MyPhotoDetailAPIView(generics.GenericAPIView):
    serializer_class = MyPhotoSerializer

    def get(self, request, id):
        query_set = My_Photo.objects.filter(id=id).first()

        if query_set:
            return response.Response(self.serializer_class(query_set).data)
        return response.Response("Not found", status=status.HTTP_404_NOT_FOUND)


class ContactAPIView(generics.CreateAPIView):
    serializer_class = ContactSerializer

    def get_queryset(self):
        return Contact.objects.all()
