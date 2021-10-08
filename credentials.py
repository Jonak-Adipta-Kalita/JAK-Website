from decouple import config

PORTS = [
    "jonakadiptakalita.herokuapp.com",
    "jonakadiptakalita.com",
    "localhost",
    "127.0.0.1",
]
PRODUCTION = False
SECRET_KEY = config("SECRET_KEY")
RECAPTCHA_SECRET_KEY = config("RECAPTCHA_SECRET_KEY")
RECAPTCHA_CLIENT_KEY = config("RECAPTCHA_CLIENT_KEY")
