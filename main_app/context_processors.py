from .models import Notification

def add_notificationsUnread_to_context(request):
    notifications_unread = Notification.objects.all().count()
    return {
        'notifications_unread': notifications_unread
    }
