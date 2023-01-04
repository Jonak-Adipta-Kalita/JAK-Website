from django.core.management.base import BaseCommand
from ...ai import train


class Command(BaseCommand):
    help = "Trains Alexis"

    def handle(self, *args, **kwargs):
        train(5000)
