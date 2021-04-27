# JAK-Website

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

### Running the server:
To run the server, open a terminal in the directory. Now type 
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
``` 
to run the server. After you did that, go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Contributors
<a href = "https://github.com/Jonak-Adipta-Kalita/JAK-Website/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Jonak-Adipta-Kalita/JAK-Website"/>
</a>
