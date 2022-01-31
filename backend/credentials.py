from decouple import config

PORTS = [
    "jonakadiptakalita.herokuapp.com",
    "localhost",
    "127.0.0.1",
]
PRODUCTION = True
SECRET_KEY = config("SECRET_KEY")
