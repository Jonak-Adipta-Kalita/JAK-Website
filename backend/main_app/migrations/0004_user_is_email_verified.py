# Generated by Django 3.2.14 on 2022-10-08 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main_app", "0003_remove_user_is_email_verified"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="is_email_verified",
            field=models.BooleanField(default=False),
        ),
    ]
