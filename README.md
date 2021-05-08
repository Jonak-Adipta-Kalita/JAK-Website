<div align=center>

# JAK-Website

</div>

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
`python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
type this in your Terminal. Copy the Output. This is Your DJANGO_SECRET_KEY.

### Getting Recaptcha Secret Key
Go to [Google Recaptcha](https://www.google.com/recaptcha/about/) and click on "V3 Admin Console".
In that Page, click on the Plus sign and Register a New Site. In the Label, give whatever name
you wanna give. In the reCaptcha Type, click on reCaptcha v2 and then "I'am not a Robot" tickbox.
In domains Enter `http://127.0.0.1:8000/`. Accept the Terms and Services and Click Submit. Now
copy the Secret Key and The Client Key.

### Passing the Required Credentials
Create a new file `credentails.py` in the Base Directory. In the `credentails.py` file,
paste the following:
```python
PORTS = ['localhost', '127.0.0.1']
SECRET_KEY = "<YOUR_DJANGO_SECRET_KEY>"
RECAPTCHA_SECRET_KEY = "<YOUR_RECAPTCHA_SECRET_KEY>"
RECAPTCHA_CLIENT_KEY = "<YOUR_RECAPTCHA_CLIENT_KEY>"
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

## Contributors
<a href = "https://github.com/Jonak-Adipta-Kalita/JAK-Website/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Jonak-Adipta-Kalita/JAK-Website"/>
</a>
