from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="home"),
    path("my_photos/", views.my_photos, name="my_photos"),
    path(
        "my_photos/grant_permission/",
        views.my_photos_grant_permission,
        name="grant_permission_for_view_photos",
    ),
    path("about/", views.about, name="about"),
    path("contact_me/", views.contact_me, name="contact_me"),
    path("social_media/", views.social_media, name="social_media"),
    path("search", views.search, name="search"),
    path("games/", views.games, name="GamesHome"),
    path("games/my_fav/", views.fav, name="GamesFav"),
    path("games/my_own/", views.own, name="GamesOwn"),
    path("discord_widget/", views.discord_widget, name="discord_widget"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
