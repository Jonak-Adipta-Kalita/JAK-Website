from django.shortcuts import render
from django.http import HttpResponse
from .models import Game_Own, Game_Fav

def games(request):
    return render(request, 'games/games.html')

def fav(request):
    games_fav = Game_Fav.objects.all()
    return render(request, 'games/my_fav.html', {"games_fav": games_fav})

def own(request):
    games_own = Game_Own.objects.all()
    return render(request, 'games/my_own.html', {"games_own": games_own})
