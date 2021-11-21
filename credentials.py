from decouple import config

PORTS = [
    "jonakadiptakalita.herokuapp.com",
    "jonakadiptakalita.com",
    "localhost",
    "127.0.0.1",
]
PRODUCTION = True
SECRET_KEY = config("SECRET_KEY")
RECAPTCHA_SECRET_KEY = config("RECAPTCHA_SECRET_KEY")
RECAPTCHA_CLIENT_KEY = config("RECAPTCHA_CLIENT_KEY")
POSTGRESS_HOST = config("POSTGRESS_HOST")
POSTGRESS_DATABASE = config("POSTGRESS_DATABASE")
POSTGRESS_USER = config("POSTGRESS_USER")
POSTGRESS_PORT = config("POSTGRESS_PORT")
POSTGRESS_PASSWORD = config("POSTGRESS_PASSWORD")
POSTGRESS_URI = config("POSTGRESS_URI")
