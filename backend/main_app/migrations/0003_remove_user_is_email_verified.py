# Generated by Django 3.2.14 on 2022-10-08 12:19

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("main_app", "0002_user_is_email_verified"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="is_email_verified",
        ),
    ]
