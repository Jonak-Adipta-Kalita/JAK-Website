from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('my_photos/', views.my_photos, name="my_photos"),
    path('about/', views.about, name="about"),
    path('contact_me/', views.contact_me, name="contact_me"),
    path('social_media/', views.social_media, name="social_media"),
    path('search/', views.search, name='seacrh')
]
