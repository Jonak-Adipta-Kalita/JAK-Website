from rest_framework import serializers
from django.contrib.auth import models as auth_models
from .models import Notification, Contact


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = auth_models.User
        fields = (
            "first_name",
            "last_name",
            "username",
            "email",
        )
