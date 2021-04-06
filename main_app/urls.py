from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('my_photos/', views.my_photos, name="my_photos"),
    path('about/', views.about, name="about"),
    path('contact_me/', views.contact_me, name="contact_me"),
    path('social_media/', views.social_media, name="social_media"),
    path('search/', views.search, name='search'),
    path("games/", views.games, name="GamesHome"),
    path("games/my_fav/", views.fav, name="GamesFav"),
    path("games/my_own/", views.own, name="GamesOwn"),
    path("anouncements/", views.anouncements, name="AnouncementHome"),
    path("anouncements/PokeGoCode/", views.PokeGocode, name="AnouncementPokeGoCodeHome"),
    path('signup/', views.handleSignup, name='handleSignup'),
    path('login/', views.handleLogin, name='handleLogin'),
    path('logout/', views.handleLogout, name='handleLogout'),
]
