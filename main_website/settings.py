from pathlib import Path
from django.contrib.messages import constants as messages
import os
import credentials

BASE_DIR = Path(__file__).resolve(strict=True).parent.parent

PWA_SERVICE_WORKER_PATH = os.path.join(BASE_DIR, "static", "serviceworker.js")

PWA_APP_NAME = "JAK Website"
PWA_APP_DESCRIPTION = "Jonak Adipta Kalita's Website"
PWA_APP_THEME_COLOR = "#d4edda"
PWA_APP_BACKGROUND_COLOR = "#ffffff"
PWA_APP_DISPLAY = "standalone"
PWA_APP_SCOPE = "/"
PWA_APP_DEBUG_MODE = False
PWA_APP_ICONS = [
    {
        "src": "/static/images/logo.png",
        "sizes": "460x460",
        "purpose": "any maskable",
    },
    {
        "src": "/static/images/badges/gamer.png",
        "sizes": "936x936",
        "purpose": "any maskable",
    },
    {
        "src": "/static/images/badges/picture_perm.png",
        "sizes": "708x708",
        "purpose": "any maskable",
    },
    {
        "src": "/static/images/badges/programmer.png",
        "sizes": "1024x1024",
        "purpose": "any maskable",
    },
    {
        "src": "/static/images/badges/staff.png",
        "sizes": "858x858",
        "purpose": "any maskable",
    },
]
PWA_APP_ICONS_APPLE = [{"src": "/static/images/logo.png", "sizes": "460x460"}]
PWA_APP_LANG = "en-US"

SECRET_KEY = credentials.SECRET_KEY

if credentials.PRODUCTION:
    DEBUG = False
else:
    DEBUG = True

ALLOWED_HOSTS = credentials.PORTS

INSTALLED_APPS = [
    "main_app.apps.MainAppConfig",
    "your_profile.apps.YourProfileConfig",
    "announcements.apps.AnnouncementsConfig",
    "pwa",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "main_website.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": ["templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "main_app.context_processors.RECAPTCHA_CLIENT_KEY_Func",
            ],
        },
    },
]

WSGI_APPLICATION = "main_website.wsgi.application"


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

MESSAGE_TAGS = {messages.ERROR: "danger"}

STATIC_URL = "/static/"
MEDIA_URL = "/media/"

if DEBUG:
    STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
else:
    STATIC_ROOT = os.path.join(BASE_DIR, "static")
    MEDIA_ROOT = os.path.join(BASE_DIR, "media")

if credentials.PRODUCTION:
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
else:
    SECURE_SSL_REDIRECT = False
    SESSION_COOKIE_SECURE = False
    CSRF_COOKIE_SECURE = False
