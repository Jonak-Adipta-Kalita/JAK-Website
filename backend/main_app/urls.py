from django.urls import path
from . import views
from rest_framework.authtoken import views as authtoken_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="home"),
    path("api/games/own", views.GameOwnListAPIView.as_view(), name="own_games"),
    path(
        "api/games/own/<str:id>", views.GameOwnDetailAPIView.as_view(), name="own_games_search"
    ),
    path("api/games/fav", views.GameFavListAPIView.as_view(), name="fav_games"),
    path(
        "api/games/fav/<str:id>", views.GameFavDetailAPIView.as_view(), name="fav_games_searcg"
    ),
    path("api/my_photos", views.MyPhotoListAPIView.as_view(), name="my_photos"),
    path(
        "api/my_photos/<str:id>", views.MyPhotoDetailAPIView.as_view(), name="my_photos_search"
    ),
    path(
        "api/notifications",
        views.NotificationListAPIView.as_view(),
        name="notifications",
    ),
    path(
        "api/contact_jak",
        views.ContactAPIView.as_view(),
        name="contact_jak",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
