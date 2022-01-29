from django.http import HttpResponse


def index(request):
    return HttpResponse("<h3>Use as Backend!!</h3>")
