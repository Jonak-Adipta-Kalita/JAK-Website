from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="home"),
    path(
        "api/notifications",
        views.NotificationListAPIView.as_view(),
        name="notifications",
    ),
    path(
        "api/contact",
        views.ContactAPIView.as_view(),
        name="contact",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
