from django.urls import path
from . import views

urlpatterns = [
    path("", views.games, name="GamesHome"),
    path("my_fav/", views.fav, name="GamesFav"),
    path("my_own/", views.own, name="GamesOwn"),
]
