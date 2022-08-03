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

if PRODUCTION:
    PORTS = [
        "jonakadiptakalita.herokuapp.com",
    ]
    FRONTEND_PORTS = [
        "https://jonakadiptakalita.vercel.app",
        "https://jonakadiptakalita.com",
    ]
else:
    PORTS = [
        "localhost",
        "127.0.0.1",
    ]
    FRONTEND_PORTS = ["http://localhost:3000", "http://127.0.0.1:3000"]
