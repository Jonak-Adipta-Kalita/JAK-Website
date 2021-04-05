from django.db import models

class Game_Own(models.Model):
    game_id = models.AutoField
    game_name = models.CharField(max_length=500)
    game_link = models.CharField(max_length=500)
    desc = models.CharField(max_length=5000)
    image = models.ImageField(default="")
    def __str__(self):
        return self.game_name + " - " + self.game_link
    
class Game_Fav(models.Model):
    game_id = models.AutoField
    game_name = models.CharField(max_length=500)
    game_link = models.CharField(max_length=500)
    desc = models.CharField(max_length=5000)
    image = models.ImageField(default="")
    def __str__(self):
        return self.game_name + " - " + self.game_link
