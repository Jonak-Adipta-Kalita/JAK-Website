from decouple import config

PRODUCTION = False
PORTS = []
FRONTEND_PORTS = []
SECRET_KEY = config("SECRET_KEY")
JWT_SECRET = config("JWT_SECRET")

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
