from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Game_Own, Game_Fav

def index(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def contact_me(request):
    return render(request, 'contact_me.html')

def social_media(request):
    return render(request, 'social_media.html')

def search(request):
    return render(request, 'search.html')

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
        if len(username) > 10:
            messages.error(request, "Username must be under 10 Characters!!")
            return redirect('home')
        if not username.isalnum():
            messages.error(request, "Username should only contain Alpha-Numeric Characters!!")
            return redirect('home')
        if pass1 != pass2:
            messages.error(request, "Passwords do not match!!")
            return redirect('home')
        myUser = User.objects.create_user(username, email, pass1)
        myUser.first_name = fname
        myUser.last_name = lname
        myUser.save()
        messages.success(request, "Successfully Created User!!")
        return redirect('home')
    else:
        return render(request, '404Error.html')

def handleLogin(request):
    if request.method == "POST":
        loginUsername = request.POST['loginUsername']
        loginPassword = request.POST['loginPass']
        user = authenticate(username=loginUsername, password=loginPassword)
        if user is not None:
            login(request, user)
            messages.success(request, "Successfully Logged In!!")
            return redirect('home')
        else:
            messages.error(request, "Invalid Credentials, Please Try Again!!")
            return redirect('home')
    else:
        return render(request, '404Error.html')

def handleLogout(request):
    logout(request)
    messages.success(request, "Successfully Logged Out!!")
    return redirect('home')
