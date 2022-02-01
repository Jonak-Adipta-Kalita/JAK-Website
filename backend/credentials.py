from decouple import config

PRODUCTION = False
PORTS = []
SECRET_KEY = config("SECRET_KEY")

if PRODUCTION:
    PORTS = [
        "jonakadiptakalita.herokuapp.com",
    ]
else:
    PORTS = [
        "localhost",
        "127.0.0.1",
    ]
