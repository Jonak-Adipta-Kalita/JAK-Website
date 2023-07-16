from email.policy import default
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField


class User(AbstractUser):
    is_email_verified = models.BooleanField(default=False)


class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70, default="")
    phone = PhoneNumberField()
    description = models.TextField(default="")

    def __str__(self):
        return self.name


class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    description = models.TextField(default="")
    image = models.ImageField(upload_to="images/projects/", default="")
    link = models.CharField(max_length=100, default="")
    source_code = models.CharField(max_length=100, default="", blank=True)
    tech_stack = ArrayField(
        models.CharField(max_length=100, default=""),
        default=list
    )

    def __str__(self):
        return self.name
