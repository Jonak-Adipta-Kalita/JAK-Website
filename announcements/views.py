from django.shortcuts import render


def index(request):
    return render(request, "announcements/announcements.html")


def poke_go_code(request):
    if request.user.is_authenticated:
        return render(request, "announcements/poke_go_code.html")
    else:
        return render(request, "404Error.html")
