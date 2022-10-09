from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin
from django.contrib.auth.forms import UserChangeForm as DefaultUserChangeForm
from .models import User, Contact, Notification


class ContactModelAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone"]
    search_fields = ["name", "email", "description"]
    list_per_page = 10


class NotificationModelAdmin(admin.ModelAdmin):
    list_display = ["name", "text"]
    search_fields = ["name", "text"]
    list_per_page = 10


class UserChangeForm(DefaultUserChangeForm):
    class Meta(DefaultUserChangeForm.Meta):
        model = User


class UserAdmin(DefaultUserAdmin):
    form = UserChangeForm

    fieldsets = DefaultUserAdmin.fieldsets + (
        (None, {"fields": ("is_email_verified",)}),
    )

    list_display = DefaultUserAdmin.list_display + ("is_email_verified",)
    list_per_page = 10


admin.site.register(User, UserAdmin)
admin.site.register(Contact, ContactModelAdmin)
admin.site.register(Notification, NotificationModelAdmin)
