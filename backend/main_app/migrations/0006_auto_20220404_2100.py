# Generated by Django 3.2.12 on 2022-04-04 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("main_app", "0005_auto_20220208_0932"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Game_Fav",
        ),
        migrations.DeleteModel(
            name="Game_Own",
        ),
    ]
