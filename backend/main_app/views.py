from django.http import HttpResponse
from rest_framework import generics
from .models import Game_Own, Game_Fav, Notification, My_Photo
from .serializers import GameOwnSerializer, GameFavSerializer, NotificationSerializer, MyPhotoSerializer

def index(request):
    return HttpResponse("<h3>Use as Backend!!</h3>")

class GameOwnListAPIView(generics.ListAPIView):
    serializer_class=GameOwnSerializer
    def get_queryset(self):
        return Game_Own.objects.all()

class GameFavListAPIView(generics.ListAPIView):
    serializer_class=GameFavSerializer
    def get_queryset(self):
        return Game_Fav.objects.all()

class NotificationListAPIView(generics.ListAPIView):
    serializer_class=NotificationSerializer
    def get_queryset(self):
        return Notification.objects.all()

class MyPhotoListAPIView(generics.ListAPIView):
    serializer_class=MyPhotoSerializer
    def get_queryset(self):
        return My_Photo.objects.all()