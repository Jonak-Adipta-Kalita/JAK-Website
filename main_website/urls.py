from django.contrib import admin
from django.urls import path, include
from main_app.views import handler404 as page_not_found
from django.conf.urls import url

admin.site.site_header = "Developer: Jonak"
admin.site.site_title = ""
admin.site.index_title = "JAK Website"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("main_app.urls")),
    url(r'^$', page_not_found, name="page_not_found"),
]

handler404 = 'main_app.views.handler404'
