from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def search(request):
    return render (request, 'anouncement/search.html')

def index(request):
    return render(request, 'anouncement/anouncement.html')

def PokeGocode(request):
    return render(request, 'anouncement/PokeGocode.html')
