from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name="home"),
    path('my_photos/', views.my_photos, name="my_photos"),
    path('about/', views.about, name="about"),
    path('contact_me/', views.contact_me, name="contact_me"),
    path('social_media/', views.social_media, name="social_media"),
    path('search', views.search, name='search'),
    path("games/", views.games, name="GamesHome"),
    path("games/my_fav/", views.fav, name="GamesFav"),
    path("games/my_own/", views.own, name="GamesOwn"),
    path("anouncements/", views.anouncements, name="AnouncementHome"),
    path("anouncements/PokeGoCode/", views.PokeGocode, name="AnouncementPokeGoCodeHome"),
    path('signup/', views.handleSignup, name='handleSignup'),
    path('login/', views.handleLogin, name='handleLogin'),
    path('logout/', views.handleLogout, name='handleLogout'),
    path('my_profile/my_account/', views.my_account, name='my_account'),
    path('my_profile/my_account/change_password/', views.handleChangePassword, name="change_password"),
    path('my_profile/notifications', views.notifications, name="notifications"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
