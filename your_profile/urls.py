from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("signup/", views.handle_signup, name="handle_signup"),
    path("login/", views.handle_login, name="handle_login"),
    path("logout/", views.handle_logout, name="handle_logout"),
    path("your_account/", views.your_account, name="my_account"),
    path(
        "your_account/change_password/",
        views.handle_change_password,
        name="change_password",
    ),
    path("notifications/", views.notifications, name="notifications"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
