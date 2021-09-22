from django.db import models


class Notification(models.Model):
    notification_id = models.AutoField(primary_key=True)
    notification_name = models.CharField(max_length=50, default="")
    notification_text = models.CharField(max_length=300, default="")

    def __str__(self):
        return self.notification_name
