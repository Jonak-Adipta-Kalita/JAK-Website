from django.contrib import admin
from .models import *


class ContactModelAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone"]
    search_fields = ["name", "email", "description"]
    list_per_page = 10


class NotificationModelAdmin(admin.ModelAdmin):
    list_display = ["name", "text"]
    search_fields = ["name", "text"]
    list_per_page = 10


admin.site.register(Contact, ContactModelAdmin)
admin.site.register(Notification, NotificationModelAdmin)
