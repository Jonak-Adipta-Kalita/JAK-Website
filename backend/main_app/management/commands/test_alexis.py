from django.core.management.base import BaseCommand
from ...ai import response


class Command(BaseCommand):
    help = "Test Alexis"

    def handle(self, *args, **kwargs):
        while True:
            response.talk(str(input("You: ")))
