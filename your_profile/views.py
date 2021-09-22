from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Notification
import json, requests
import credentials


def handle_change_password(request):
    if request.user.is_authenticated and request.method == "POST":
        current_pass = request.POST["changepass_currentpass"]
        new_pass = request.POST["changepass_newpass"]
        new_pass_confirm = request.POST["changepass_newpassconfirm"]
        client_key = request.POST["g-recaptcha-response"]
        secret_key = credentials.RECAPTCHA_SECRET_KEY
        captchaData = {"secret": secret_key, "response": client_key}
        r = requests.post(
            "https://www.google.com/recaptcha/api/siteverify", data=captchaData
        )
        response = json.loads(r.text)
        verify = response["success"]
        if not request.user.check_password(current_pass):
            messages.error(request, "Invalid Current Password!!")
            return redirect("home")
        if new_pass != new_pass_confirm:
            messages.error(request, "Passwords do not match!!")
            return redirect("home")
        if not verify:
            messages.error(request, "Invalid Recaptcha!!")
            return redirect("home")
        else:
            user = User.objects.get(username=request.user.username)
            user.set_password(new_pass)
            user.save()
            messages.success(request, "Password Changed Successfully!!")
            return redirect("home")
        return redirect("home")
    else:
        return render(request, "404Error.html")


def your_account(request):
    if request.user.is_authenticated:
        context = {"user": request.user}
        return render(request, "your_profile/your_account.html", context)
    else:
        return render(request, "404Error.html")


def handle_signup(request):
    if request.method == "POST":
        username = request.POST["signUpUsername"]
        fname = request.POST["fname"]
        lname = request.POST["lname"]
        email = request.POST["email"]
        pass1 = request.POST["signUpPass1"]
        pass2 = request.POST["signUpPass2"]
        client_key = request.POST["g-recaptcha-response"]
        secret_key = credentials.RECAPTCHA_SECRET_KEY
        captchaData = {"secret": secret_key, "response": client_key}
        r = requests.post(
            "https://www.google.com/recaptcha/api/siteverify", data=captchaData
        )
        response = json.loads(r.text)
        verify = response["success"]
        if len(username) > 10:
            messages.error(request, "Username must be under 10 Characters!!")
            return redirect("home")
        if not username.isalnum():
            messages.error(
                request, "Username should only contain Alpha-Numeric Characters!!"
            )
            return redirect("home")
        if pass1 != pass2:
            messages.error(request, "Passwords do not match!!")
            return redirect("home")
        if verify:
            myUser = User.objects.create_user(username, email, pass1)
            myUser.first_name = fname
            myUser.last_name = lname
            myUser.save()
            messages.success(request, "Successfully Created User!!")
        else:
            messages.error(request, "Invalid Recaptcha/Credentials!!")
        return redirect("home")
    else:
        return render(request, "404Error.html")


def handle_login(request):
    if request.method == "POST":
        loginUsername = request.POST["loginUsername"]
        loginPassword = request.POST["loginPass"]
        client_key = request.POST["g-recaptcha-response"]
        secret_key = credentials.RECAPTCHA_SECRET_KEY
        captchaData = {"secret": secret_key, "response": client_key}
        r = requests.post(
            "https://www.google.com/recaptcha/api/siteverify", data=captchaData
        )
        response = json.loads(r.text)
        verify = response["success"]
        user = authenticate(username=loginUsername, password=loginPassword)
        if verify and user is not None:
            login(request, user)
            messages.success(request, "Successfully Logged In!!")
            return redirect("home")
        else:
            messages.error(request, "Invalid Recaptcha/Credentials, Please Try Again!!")
            return redirect("home")
    else:
        return render(request, "404Error.html")


def handle_logout(request):
    if request.user.is_authenticated:
        logout(request)
        messages.success(request, "Successfully Logged Out!!")
        return redirect("home")
    else:
        return render(request, "404Error.html")


def notifications(request):
    if request.user.is_authenticated:
        notifications = Notification.objects.all()
        context = {"notifications": notifications}
        return render(request, "your_profile/notifications.html", context)
    else:
        return render(request, "404Error.html")