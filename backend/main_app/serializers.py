from rest_framework import serializers
from .models import Game_Fav, Game_Own, My_Photo, Notification, Contact


class GameOwnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game_Own
        fields = "__all__"


class GameFavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game_Fav
        fields = "__all__"


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"


class MyPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = My_Photo
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
