# Generated by Django 3.1.7 on 2021-04-11 06:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("main_app", "0006_auto_20210411_1124"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="game_fav",
            name="image",
        ),
        migrations.RemoveField(
            model_name="game_own",
            name="image",
        ),
    ]
