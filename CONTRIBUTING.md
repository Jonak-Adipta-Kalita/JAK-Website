-   Note: [Formatting](#format-code) the Code before Pushing is Important!!

## Steps

### Clone the Repository

To Clone this Repository, open a terminal in a empty folder and type

```bash
git clone https://github.com/Jonak-Adipta-Kalita/JAK-Website.git
```

### Installing The Required Modules

To install the required modules, just open a terminal in the directory where this project is cloned.

For the Backend:

```bash
cd backend
pip install virtualenv
virtualenv venv
.\venv\Scripts\activate
pip install -r .\requirements.txt
```

For the Frontend

```bash
cd frontend
npm i

# or

cd frontend
yarn
```

### Getting Django Secret Key

`python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`
type this in your Terminal. Copy the Output. This is Your DJANGO_SECRET_KEY.

### Getting JWT Secret

Use the [passwordgenerator](https://passwordsgenerator.net/) website to generate your secret.

### Gettigng hCaptcha Keys

### Getting PostgreSQL Credentials

Create a Postgres Database using a online provider or you can create a local one, then you will get your Postgres credentials.

### Passing the Required Credentials

Create a new file `.env` in the `backend` folder and new file `.env.local` in the `frontend` folder. In the
`.env` file, paste the following:

```env
PRODUCTION=False
SECRET_KEY=<YOUR_DJANGO_SECRET_KEY>
JWT_SECRET=<YOUR_JWT_SECRET>

# Postgres
POSTGRESS_HOST=<YOUR_POSTGRESS_HOST>
POSTGRESS_DATABASE=<YOUR_POSTGRESS_DATABASE>
POSTGRESS_USER=<YOUR_POSTGRESS_USER>
POSTGRESS_PORT=<YOUR_POSTGRESS_PORT>
POSTGRESS_PASSWORD=<YOUR_POSTGRESS_PASSWORD>

# EMail
EMAIL_HOST=<YOUR_EMAIL_HOST>
EMAIL_HOST_USER=<YOUR_EMAIL_HOST_USER>
EMAIL_HOST_PASSWORD=<YOUR_EMAIL_HOST_PASSWORD>
EMAIL_USE_TLS=<YOUR_EMAIL_USE_TLS>
EMAIL_PORT=<YOUR_EMAIL_PORT>
```

and in the `.env.local` file, paste the following:

```env
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=<YOUR_HCAPTCHA_SITE_KEY>
HCAPTCHA_SECRET_KEY=<YOUR_HCAPTCHA_SECRET_KEY>
JWT_SECRET=<YOUR_JWT_SECRET>
RAPIDAPI_KEY=<YOUR_RAPIDAPI_KEY>
```

### Running the Backend:

To run the backend, open a terminal in the directory. Now type

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

to run the backtend. After you did that, go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) or
[http://localhost:8000/](http://localhost:8000/).

### Running the Frontend

To run the frontend, open a terminal in the directory. Now type

```bash
cd frontend
npm run dev

# or

cd frontend
yarn dev
```

to run the frontend. After you did that, go to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) or
[http://localhost:3000/](http://localhost:3000/).

## Format Code

In a terminal, type

```bash
cd backend
.\venv\Scripts\activate
black .
deactivate
```

and press Enter.
