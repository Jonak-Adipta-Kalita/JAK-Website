from django.contrib import admin
from .models import Contact, Project


class ContactModelAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone"]
    search_fields = ["name", "email", "description"]
    list_per_page = 10


class ProjectModelAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "image",
                    "link", "source_code", "tech_stack"]
    search_fields = ["name", "description", "image",
                     "link", "source_code", "tech_stack"]
    list_per_page = 10


admin.site.register(Contact, ContactModelAdmin)
admin.site.register(Project, ProjectModelAdmin)
