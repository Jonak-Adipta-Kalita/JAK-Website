import credentials

RECAPTCHA_CLIENT_KEY = credentials.RECAPTCHA_CLIENT_KEY

def RECAPTCHA_CLIENT_KEY_Func(request):
    return {
        'RECAPTCHA_CLIENT_KEY': RECAPTCHA_CLIENT_KEY
    }
