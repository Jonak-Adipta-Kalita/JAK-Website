from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="home"),
    path("api/games/own", views.GameOwnListAPIView.as_view(), name="own_games"),
    path("api/games/fav", views.GameFavListAPIView.as_view(), name="fav_games"),
    path("api/my_photos", views.MyPhotoListAPIView.as_view(), name="my_photos"),
    path("api/notifications", views.NotificationListAPIView.as_view(), name="notifications"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
