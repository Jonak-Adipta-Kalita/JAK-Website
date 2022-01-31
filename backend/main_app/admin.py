from django.contrib import admin
from .models import *


class GameModelAdmin(admin.ModelAdmin):
    list_display = ["name", "link", "description"]
    search_fields = ["name", "description"]
    list_per_page = 10


class ContactModelAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone"]
    search_fields = ["name", "email", "description"]
    list_per_page = 10


class MyPhotoModelAdmin(admin.ModelAdmin):
    search_fields = ["name"]
    list_per_page = 10


class NotificationModelAdmin(admin.ModelAdmin):
    list_display = ["name", "text"]
    search_fields = ["name", "text"]
    list_per_page = 10


admin.site.register(Game_Fav, GameModelAdmin)
admin.site.register(Game_Own, GameModelAdmin)
admin.site.register(Contact, ContactModelAdmin)
admin.site.register(My_Photo, MyPhotoModelAdmin)
admin.site.register(Notification, NotificationModelAdmin)
