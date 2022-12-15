from decouple import config

PRODUCTION = True if config("PRODUCTION").lower() == "true" else False
PORTS = []
FRONTEND_PORTS = []
SECRET_KEY = config("SECRET_KEY")
JWT_SECRET = config("JWT_SECRET")
POSTGRESS_HOST = config("POSTGRESS_HOST")
POSTGRESS_DATABASE = config("POSTGRESS_DATABASE")
POSTGRESS_USER = config("POSTGRESS_USER")
POSTGRESS_PORT = config("POSTGRESS_PORT")
POSTGRESS_PASSWORD = config("POSTGRESS_PASSWORD")
EMAIL_HOST = config("EMAIL_HOST")
EMAIL_HOST_USER = config("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD")
EMAIL_USE_TLS = True if config("EMAIL_USE_TLS").lower() == "true" else False
EMAIL_PORT = config("EMAIL_PORT")

if PRODUCTION:
    PORTS = [
        "backend.jonakadiptakalita.tk",
        "jonakadiptakalita.c0d3.info",
        "pluto.seidensal.info",
        "127.0.0.1"
    ]
    FRONTEND_PORTS = [
        "https://jonakadiptakalita.tk",
    ]
else:
    PORTS = [
        "localhost",
        "127.0.0.1",
    ]
    FRONTEND_PORTS = ["http://localhost:3000", "http://127.0.0.1:3000"]
