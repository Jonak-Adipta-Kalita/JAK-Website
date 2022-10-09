import pathlib, os, credentials, datetime

BASE_DIR = pathlib.Path(__file__).resolve(strict=True).parent.parent

SECRET_KEY = credentials.SECRET_KEY

if credentials.PRODUCTION:
    DEBUG = False
    CSRF_COOKIE_SECURE = True
    SESSION_COOKIE_SECURE = True
else:
    DEBUG = True
    CSRF_COOKIE_SECURE = False
    SESSION_COOKIE_SECURE = False

ALLOWED_HOSTS = credentials.PORTS
CORS_ALLOWED_ORIGINS = credentials.FRONTEND_PORTS

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"

USE_I18N = True
USE_L10N = True
USE_TZ = True

MEDIA_URL = "/media/"
STATIC_URL = "/static/"

MEDIA_ROOT = os.path.join(BASE_DIR, "media")
STATIC_ROOT = os.path.join(BASE_DIR, "static")

ROOT_URLCONF = "main_website.urls"

WSGI_APPLICATION = "main_website.wsgi.application"

AUTH_USER_MODEL = "main_app.User"

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "main_app.apps.MainAppConfig",
    "rest_framework",
    "corsheaders",
    "phonenumber_field",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

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
            ],
        },
    },
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": credentials.POSTGRESS_DATABASE,
        "USER": credentials.POSTGRESS_USER,
        "PASSWORD": credentials.POSTGRESS_PASSWORD,
        "HOST": credentials.POSTGRESS_HOST,
        "PORT": credentials.POSTGRESS_PORT,
    }
}

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ]
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": datetime.timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": datetime.timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": False,
    "AUTH_HEADER_TYPES": ["Bearer"],
    "AUTH_TOKEN_CLASSES": ["rest_framework_simplejwt.tokens.AccessToken"],
    "SIGNING_KEY": credentials.JWT_SECRET,
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
