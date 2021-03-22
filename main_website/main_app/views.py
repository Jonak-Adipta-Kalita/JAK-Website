from django.shortcuts import render

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

# def error_404_view()