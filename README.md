<div align=center>

# JAK-Website

![Website](https://img.shields.io/website?down_color=red&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fjonakadiptakalita.herokuapp.com)
[![Code Style: Black](https://img.shields.io/badge/Code%20Style-Black-000000.svg?style=for-the-badge)](https://github.com/psf/black)
![License](https://img.shields.io/github/license/Jonak-Adipta-Kalita/JAK-Website?style=for-the-badge)
![GitHub Repo Stars](https://img.shields.io/github/stars/Jonak-Adipta-Kalita/JAK-Website?style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/Jonak-Adipta-Kalita/JAK-Website?style=for-the-badge)
![GitHub Watchers](https://img.shields.io/github/watchers/Jonak-Adipta-Kalita/JAK-Website?style=for-the-badge)
![Made by JAK](https://img.shields.io/badge/BeastNight%20TV-Made%20by%20JAK-blue?style=for-the-badge)

</div>

-   Note: [Formatting](#format-code) the Code before Pushing is Important!!

Go to the [Website](https://jonakadiptakalita.herokuapp.com/)

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

### Passing the Required Credentials

Create a new file `.env` in the `backend` folder and new file `.env.local` in the `frontend` folder. In the
`.env` file, paste the following:

```env
SECRET_KEY=<YOUR_DJANGO_SECRET_KEY>
```

and in the `.env.local` file, paste the following:

```env
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
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

## Technology(s) Used

-   Language: [Python](https://www.python.org/), [TypeScript](https://www.typescriptlang.org/)
-   Language Framework: [Django](https://www.djangoproject.com/), [NextJS](https://nextjs.org/)
-   Hosted: [Heroku](https://heroku.com/), [Vercel](https://vercel.com/)

## Contributors

<a href = "https://github.com/Jonak-Adipta-Kalita/JAK-Website/graphs/contributors">
	<img src = "https://contrib.rocks/image?repo=Jonak-Adipta-Kalita/JAK-Website"/>
</a>
