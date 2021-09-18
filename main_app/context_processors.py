import credentials

def RECAPTCHA_CLIENT_KEY_Func(request):
    return {"RECAPTCHA_CLIENT_KEY": credentials.RECAPTCHA_CLIENT_KEY}
