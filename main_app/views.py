from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Game_Own, Game_Fav, Contact, My_Photo, Notification
import requests, json, math
import credentials

myPhotos_view_permission = False

def index(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def handleChangePassword(request):
    if request.user.is_authenticated and request.method == "POST":
        current_pass = request.POST['changepass_currentpass']
        new_pass = request.POST['changepass_newpass']
        new_pass_confirm = request.POST['changepass_newpassconfirm']
        client_key = request.POST['g-recaptcha-response']
        secret_key = credentials.RECAPTCHA_SECRET_KEY
        captchaData = {
            'secret': secret_key,
            'response': client_key
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=captchaData)
        response = json.loads(r.text)
        verify = response['success']
        if not request.user.check_password(current_pass):
            messages.error(request, "Invalid Current Password!!")
            return redirect('home')
        if new_pass != new_pass_confirm:
            messages.error(request, "Passwords do not match!!")
            return redirect('home')
        if not verify:
            messages.error(request, "Invalid Recaptcha!!")
            return redirect('home')
        else:
            user = User.objects.get(username=request.user.username)
            user.set_password(new_pass)
            user.save()
            messages.success(request, 'Password Changed Successfully!!')
            return redirect('home')
        return redirect('home')
    else:
        return render(request, '404Error.html')

def my_account(request):
    if request.user.is_authenticated:
        context = {
            'user': request.user
        }
        return render(request, 'my_account.html', context)
    else:
        return render(request, '404Error.html')

def contact_me(request):
    if request.user.is_authenticated:
        if request.method == "POST":
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            phone = request.POST.get('phone', '')
            desc = request.POST.get('desc', '')
            client_key = request.POST['g-recaptcha-response']
            secret_key = credentials.RECAPTCHA_SECRET_KEY
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
    else:
        messages.error(request, "Please Login or SignUp!!")
    return render(request, 'contact_me.html')

def social_media(request):
    return render(request, 'social_media.html')

def search(request):
    query = request.GET['query']
    no_of_results = 9
    page = request.GET.get('page')
    if page is None:
        page = 1
    else:
        page = int(page)
    if len(query) == 0:
        messages.error(request, "Please pass something in the input!!")
        return redirect('home')
    if len(query) > 10:
        allGamesFav = []
        allGamesOwn = []
        allMyPhotos = []
    else:
        allGamesFav = Game_Fav.objects.filter(game_name__icontains=query)
        allGamesFav_length = len(allGamesFav)
        allGamesFav = Game_Fav.objects.filter(game_name__icontains=query)[(page - 1) * no_of_results: page * no_of_results]

        allGamesOwn = Game_Own.objects.filter(game_name__icontains=query)
        allGamesOwn_length = len(allGamesOwn)
        allGamesOwn = Game_Own.objects.filter(game_name__icontains=query)[(page - 1) * no_of_results: page * no_of_results]

        allMyPhotos = My_Photo.objects.filter(name__icontains=query)
        allMyPhotos_length = len(allMyPhotos)
        allMyPhotos = My_Photo.objects.filter(name__icontains=query)[(page - 1) * no_of_results: page * no_of_results]

    if page > 1:
        prev = page - 1
    else:
        prev = None
    if page < (math.ceil(allGamesFav_length / no_of_results)) or (math.ceil(allGamesOwn_length / no_of_results)) or (math.ceil(allMyPhotos_length / no_of_results)):
        nxt = page + 1
    else:
        nxt = None
    params = {"GamesFav": allGamesFav, "GamesOwn": allGamesOwn, "MyPhotos": allMyPhotos, "query": query, 'prev': prev, 'nxt': nxt}
    return render(request, 'search.html', params)

def my_photos_grant_permission(request):
    global myPhotos_view_permission
    if request.user.is_authenticated:
        myPhotos_view_permission = True
        messages.success(request, 'Permission Granted!!')
        return redirect('/my_photos/')
    else:
        return render(request, '404Error.html')

def my_photos(request):
    no_of_pic = 9
    page = request.GET.get('page')
    if page is None:
        page = 1
    else:
        page = int(page)
    my_photo = My_Photo.objects.all()
    length = len(my_photo)
    my_photo = My_Photo.objects.all()[(page - 1) * no_of_pic: page * no_of_pic]
    if page > 1:
        prev = page - 1
    else:
        prev = None
    if page < math.ceil(length / no_of_pic):
        nxt = page + 1
    else:
        nxt = None
    return render(request, 'my_photos.html', {"my_photo": my_photo, 'prev': prev, 'nxt': nxt, 'permission': myPhotos_view_permission})

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
    if request.user.is_authenticated:
        return render(request, 'PokeGocode.html')
    else:
        return render(request, '404Error.html')

def handler404(request, *args, **argv):
    return render(request, '404Error.html')

def notifications(request):
    if request.user.is_authenticated:
        notifications = Notification.objects.all()
        context = {"notifications": notifications}
        return render(request, 'notifications.html', context)
    else:
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
        secret_key = credentials.RECAPTCHA_SECRET_KEY
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
        secret_key = credentials.RECAPTCHA_SECRET_KEY
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
