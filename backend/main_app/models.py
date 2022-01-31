from django.db import models


class Game_Own(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=500, default="")
    link = models.CharField(max_length=500, default="")
    description = models.TextField(default="")
    image = models.ImageField(upload_to="images/games/own", default="")

    def __str__(self):
        return self.name + " - " + self.link


class Game_Fav(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=500, default="")
    link = models.CharField(max_length=500, default="")
    description = models.TextField(default="")
    image = models.ImageField(upload_to="images/games/fav", default="")

    def __str__(self):
        return self.name + " - " + self.link


class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70, default="")
    phone = models.CharField(max_length=70, default="")
    description = models.TextField(default="")

    def __str__(self):
        return self.name


class My_Photo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    image = models.ImageField(upload_to="images/my_photos", default="")

    def __str__(self):
        return self.name

class Notification(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    text = models.TextField(default="")

    def __str__(self):
        return self.name
