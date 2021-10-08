from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Game_Own, Game_Fav, Contact, My_Photo
import requests, json, math
import credentials

myPhotos_view_permission = False


def index(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")


def contact_me(request):
    if request.user.is_authenticated:
        if request.method == "POST":
            name = request.POST.get("name", "")
            email = request.POST.get("email", "")
            phone = request.POST.get("phone", "")
            desc = request.POST.get("desc", "")
            client_key = request.POST["g-recaptcha-response"]
            secret_key = credentials.RECAPTCHA_SECRET_KEY
            captchaData = {"secret": secret_key, "response": client_key}
            r = requests.post(
                "https://www.google.com/recaptcha/api/siteverify", data=captchaData
            )
            response = json.loads(r.text)
            verify = response["success"]
            if verify:
                contact = Contact(name=name, email=email, phone=phone, desc=desc)
                contact.save()
                messages.success(request, "Message Sent!!")
            else:
                messages.error(request, "Invalid Recaptcha/Credentials!!")
    else:
        messages.error(request, "Please Login or SignUp!!")
    return render(request, "contact_me.html")


def social_media(request):
    return render(request, "social_media.html")


def search(request):
    if requests.get("https://www.google.com/").status_code == 200:
        query = request.GET["query"]
        no_of_results = 9
        page = request.GET.get("page")
        if page is None:
            page = 1
        else:
            page = int(page)
        if len(query) == 0:
            messages.error(request, "Please pass something in the input!!")
            return redirect("home")
        if len(query) > 10:
            allGamesFav = []
            allGamesOwn = []
            allMyPhotos = []
        else:
            allGamesFav = Game_Fav.objects.filter(game_name__icontains=query)
            allGamesFav_length = len(allGamesFav)
            allGamesFav = Game_Fav.objects.filter(game_name__icontains=query)[
                (page - 1) * no_of_results : page * no_of_results
            ]

            allGamesOwn = Game_Own.objects.filter(game_name__icontains=query)
            allGamesOwn_length = len(allGamesOwn)
            allGamesOwn = Game_Own.objects.filter(game_name__icontains=query)[
                (page - 1) * no_of_results : page * no_of_results
            ]

            allMyPhotos = My_Photo.objects.filter(name__icontains=query)
            allMyPhotos_length = len(allMyPhotos)
            allMyPhotos = My_Photo.objects.filter(name__icontains=query)[
                (page - 1) * no_of_results : page * no_of_results
            ]

        if page > 1:
            prev = page - 1
        else:
            prev = None
        if (
            page < (math.ceil(allGamesFav_length / no_of_results))
            or (math.ceil(allGamesOwn_length / no_of_results))
            or (math.ceil(allMyPhotos_length / no_of_results))
        ):
            nxt = page + 1
        else:
            nxt = None
        params = {
            "GamesFav": allGamesFav,
            "GamesOwn": allGamesOwn,
            "MyPhotos": allMyPhotos,
            "query": query,
            "prev": prev,
            "nxt": nxt,
        }
        return render(request, "search.html", params)
    else:
        messages.error("Check your Connection!!")
        return redirect("Home")


def my_photos_grant_permission(request):
    global myPhotos_view_permission
    if request.user.is_authenticated:
        myPhotos_view_permission = True
        messages.success(request, "Permission Granted!!")
        return redirect("/my_photos/")
    else:
        return render(request, "404Error.html")


def my_photos(request):
    no_of_pic = 9
    page = request.GET.get("page")
    if page is None:
        page = 1
    else:
        page = int(page)
    my_photo = My_Photo.objects.all()
    length = len(my_photo)
    my_photo = My_Photo.objects.all()[(page - 1) * no_of_pic : page * no_of_pic]
    if page > 1:
        prev = page - 1
    else:
        prev = None
    if page < math.ceil(length / no_of_pic):
        nxt = page + 1
    else:
        nxt = None
    return render(
        request,
        "my_photos.html",
        {
            "my_photo": my_photo,
            "prev": prev,
            "nxt": nxt,
            "permission": myPhotos_view_permission,
        },
    )


def games(request):
    return render(request, "games/games.html")


def fav(request):
    games_fav = Game_Fav.objects.all()
    return render(request, "games/my_fav.html", {"games_fav": games_fav})


def own(request):
    games_own = Game_Own.objects.all()
    return render(request, "games/my_own.html", {"games_own": games_own})


def handler404(request, *args, **argv):
    return render(request, "404Error.html")


def discord_widget(request):
    return render(request, "discord_widget.html")
