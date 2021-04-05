from django.shortcuts import render
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
