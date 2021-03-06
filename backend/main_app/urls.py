from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
import rest_framework_simplejwt.views as simplejwt_views

urlpatterns = [
    path("", views.index, name="home"),
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
    path(
        "api/auth/token",
        simplejwt_views.TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "api/auth/token/refresh",
        simplejwt_views.TokenRefreshView.as_view(),
        name="refresh_token",
    ),
    path(
        "api/auth/token/verify",
        simplejwt_views.TokenVerifyView.as_view(),
        name="verify_token",
    ),
    path("api/auth/register", views.RegisterView.as_view(), name="register"),
    path("api/auth/user", views.LoadUserView.as_view(), name="user"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
