# Generated by Django 3.2.18 on 2023-06-23 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0004_user_is_email_verified'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=50)),
                ('description', models.TextField(default='')),
                ('image', models.ImageField(default='', upload_to='images/projects/')),
                ('link', models.CharField(default='', max_length=100)),
                ('source_code', models.CharField(blank=True, default='', max_length=100)),
            ],
        ),
    ]
