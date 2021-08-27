from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="anouncement_home"),
    path(
        "poke_go_code/",
        views.poke_go_code,
        name="poke_go_code",
    )
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
