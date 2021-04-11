from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Game_Own, Game_Fav, Contact
import requests, json

def index(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def my_account(request):
    if request.user.is_authenticated:
        context = {
            'user': request.user
        }
        return render(request, 'my_account.html', context)
    else:
        return render(request, '404Error.html')

def contact_me(request):
    if request.method == "POST":
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        desc = request.POST.get('desc', '')
        client_key = request.POST['g-recaptcha-response']
        secret_key = '6LdC8KAaAAAAALYaDETpXQxAaX50_LM7Dlw29n6o'
        captchaData = {
            'secret': secret_key,
            'response': client_key
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=captchaData)
        response = json.loads(r.text)
        verify = response['success']
        if verify:
            contact = Contact(name=name, email=email, phone=phone, desc=desc)
            contact.save()
            messages.success(request, "Message Sent!!")
        else:
            messages.error(request, "Invalid Recaptcha/Credentials!!")
    return render(request, 'contact_me.html')

def social_media(request):
    return render(request, 'social_media.html')

def search(request):
    query = request.GET['query']
    if len(query) > 10:
        allGamesFav = []
        allGamesOwn = []
    else:
        allGamesFav = Game_Fav.objects.filter(game_name__icontains=query)
        allGamesOwn = Game_Own.objects.filter(game_name__icontains=query)
    params = {"GamesFav": allGamesFav, "GamesOwn": allGamesOwn, "query": query}
    return render(request, 'search.html', params)

def my_photos(request):
    return render(request, 'my_photos.html')

def games(request):
    return render(request, 'games.html')

def fav(request):
    games_fav = Game_Fav.objects.all()
    return render(request, 'my_fav.html', {"games_fav": games_fav})

def own(request):
    games_own = Game_Own.objects.all()
    return render(request, 'my_own.html', {"games_own": games_own})

def anouncements(request):
    return render(request, 'anouncement.html')

def PokeGocode(request):
    return render(request, 'PokeGocode.html')

def error_404_view(request):
    return render(request, '404Error.html')

def handleSignup(request):
    if request.method == "POST":
        username = request.POST['signUpUsername']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['signUpPass1']
        pass2 = request.POST['signUpPass2']
        client_key = request.POST['g-recaptcha-response']
        secret_key = '6LdC8KAaAAAAALYaDETpXQxAaX50_LM7Dlw29n6o'
        captchaData = {
            'secret': secret_key,
            'response': client_key
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=captchaData)
        response = json.loads(r.text)
        verify = response['success']
        if len(username) > 10:
            messages.error(request, "Username must be under 10 Characters!!")
            return redirect('home')
        if not username.isalnum():
            messages.error(request, "Username should only contain Alpha-Numeric Characters!!")
            return redirect('home')
        if pass1 != pass2:
            messages.error(request, "Passwords do not match!!")
            return redirect('home')
        if verify:
            myUser = User.objects.create_user(username, email, pass1)
            myUser.first_name = fname
            myUser.last_name = lname
            myUser.save()
            messages.success(request, "Successfully Created User!!")
        else:
            messages.error(request, "Invalid Recaptcha/Credentials!!")
        return redirect('home')
    else:
        return render(request, '404Error.html')

def handleLogin(request):
    if request.method == "POST":
        loginUsername = request.POST['loginUsername']
        loginPassword = request.POST['loginPass']
        client_key = request.POST['g-recaptcha-response']
        secret_key = '6LdC8KAaAAAAALYaDETpXQxAaX50_LM7Dlw29n6o'
        captchaData = {
            'secret': secret_key,
            'response': client_key
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=captchaData)
        response = json.loads(r.text)
        verify = response['success']
        user = authenticate(username=loginUsername, password=loginPassword)
        if verify and user is not None:
            login(request, user)
            messages.success(request, "Successfully Logged In!!")
            return redirect('home')
        else:
            messages.error(request, "Invalid Recaptcha/Credentials, Please Try Again!!")
            return redirect('home')
    else:
        return render(request, '404Error.html')

def handleLogout(request):
    if request.user.is_authenticated:
        logout(request)
        messages.success(request, "Successfully Logged Out!!")
        return redirect('home')
    else:
        return render(request, '404Error.html')
