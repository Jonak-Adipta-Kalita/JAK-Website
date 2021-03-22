from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="AnouncementHome"),
    path("PokeGoCode/", views.PokeGocode, name="AnouncementPokeGoCodeHome"),
    path('search/', views.search, name="search"),
]