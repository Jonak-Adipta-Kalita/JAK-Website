from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .models import User
import six


class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user: User, timestamp: int) -> str:
        return (
            six.text_type(user.pk)
            + six.text_type(timestamp)
            + six.text_type(user.is_email_verified)
        )


generate_token = TokenGenerator()
