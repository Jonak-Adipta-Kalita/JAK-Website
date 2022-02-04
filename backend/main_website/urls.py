from django.contrib import admin
from django.urls import path, include

admin.site.site_header = "Developer: Jonak"
admin.site.site_title = ""
admin.site.index_title = "JAK Website"

urlpatterns = [
    path("admin/", admin.site.urls),
    path(r"", include("main_app.urls")),
]