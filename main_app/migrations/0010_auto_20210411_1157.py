# Generated by Django 3.1.7 on 2021-04-11 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main_app", "0009_my_photo"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="my_photo",
            name="desc",
        ),
        migrations.AlterField(
            model_name="my_photo",
            name="name",
            field=models.CharField(default="", max_length=15),
        ),
    ]