from django.db import models

class Game_Own(models.Model):
    game_id = models.AutoField
    game_name = models.CharField(max_length=500, default="")
    game_link = models.CharField(max_length=500, default="")
    game_link = models.CharField(max_length=500, default="")
    desc = models.CharField(max_length=5000, default="")
    image = models.ImageField(upload_to="image", default="")
    def __str__(self):
        return self.game_name + " - " + self.game_link
    
class Game_Fav(models.Model):
    game_id = models.AutoField
    game_name = models.CharField(max_length=500, default="")
    game_link = models.CharField(max_length=500, default="")
    desc = models.CharField(max_length=5000, default="")
    image = models.ImageField(upload_to="image", default="")
    def __str__(self):
        return self.game_name + " - " + self.game_link

class Contact(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70, default="")
    phone = models.CharField(max_length=70, default="")
    desc = models.CharField(max_length=500, default="")
    def __str__(self):
        return self.name
