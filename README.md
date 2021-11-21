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

To install the required modules, just open a terminal in the directory where this project is cloned. Now type:

```bash
pip install virtualenv
virtualenv venv
.\venv\Scripts\activate
pip install -r .\requirements.txt
```

and hit enter.

### Getting Django Secret Key

`python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`
type this in your Terminal. Copy the Output. This is Your DJANGO_SECRET_KEY.

### Getting Recaptcha Keys

Go to [Google Recaptcha](https://www.google.com/recaptcha/about/) and click on "V3 Admin Console".
In that Page, click on the Plus sign and Register a New Site. In the Label, give whatever name
you wanna give. In the reCaptcha Type, click on reCaptcha v2 and then "I'am not a Robot" tickbox.
In domains Enter `http://127.0.0.1:8000/`. Accept the Terms and Services and Click Submit. Now
copy the Secret Key and The Client Key.

### Getting PostgresSQL Credentials

### Passing the Required Credentials

Create a new file `.env` in the Base Directory. In the `.env` file,
paste the following:

```env
SECRET_KEY=<YOUR_DJANGO_SECRET_KEY>
RECAPTCHA_SECRET_KEY=<YOUR_RECAPTCHA_SECRET_KEY>
RECAPTCHA_CLIENT_KEY=<YOUR_RECAPTCHA_CLIENT_KEY>
POSTGRESS_HOST=<YOUR_POSTGRESS_HOST>
POSTGRESS_DATABASE=<YOUR_POSTGRESS_DATABASE>
POSTGRESS_USER=<YOUR_POSTGRESS_USER>
POSTGRESS_PORT=<YOUR_POSTGRESS_PORT>
POSTGRESS_PASSWORD=<YOUR_POSTGRESS_PASSWORD>
POSTGRESS_URI=<YOUR_POSTGRESS_URI>
```

### Running the server:

To run the server, open a terminal in the directory. Now type

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

to run the server. After you did that, go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) or
[http://localhost:8000/](http://localhost:8000/).

## Format Code

In a terminal, type

```bash
.\venv\Scripts\activate
black .
deactivate
```

and press Enter.

## Technology(s) Used

-   Language: [Python](https://www.python.org/)
-   Language Framework: [Django](https://www.djangoproject.com/)
-   CSS Framework: [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
-   Hosted: [Heroku](https://heroku.com/)
-   Icon: [Font Awesome](https://fontawesome.com/)

## Contributors

<a href = "https://github.com/Jonak-Adipta-Kalita/JAK-Website/graphs/contributors">
	<img src = "https://contrib.rocks/image?repo=Jonak-Adipta-Kalita/JAK-Website"/>
</a>
