from django.contrib import admin
from django.urls import path, include
from main_app.views import handler404 as page_not_found
from django.conf.urls import url
from django.conf import settings
from django.views.static import serve

admin.site.site_header = "Developer: Jonak"
admin.site.site_title = ""
admin.site.index_title = "JAK Website"

urlpatterns = [
    path("admin/", admin.site.urls),
    path(r"", include("main_app.urls")),
    path("", include("pwa.urls")),
    path("your_profile/", include("your_profile.urls")),
    path("announcements/", include("announcements.urls")),
    url(r"^$", page_not_found, name="page_not_found"),
    url(r"^media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT}),
    url(r"^static/(?P<path>.*)$", serve, {"document_root": settings.STATIC_ROOT}),
]

handler404 = "main_app.views.handler404"
