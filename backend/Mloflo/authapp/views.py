from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout ,get_user_model
from django.contrib import messages
from .forms import SignUpForm
from django.urls import reverse

from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage

from .tokens import account_activation_token 

# Create your views here.
def activate(request, uidb64, token):
    User = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except:
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        messages.success(request, "Thankyou for your email information now you can login your account.")
        return redirect('/authapp/login')
    else:
        messages.error(request, "Activation link is invalid, signup again")
    return redirect('authapp/signup')

def activateEmail(request, user, email):
    mail_subject = "Activate your user account"
    message= render_to_string("authapp/activeaccount.html",{
        'user': user.username,
        'domain': get_current_site(request).domain,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
        'protocol': 'https' if request.is_secure() else 'http'
    }

    )
    email = EmailMessage(mail_subject, message, to=[email])
    if email.send():
        messages.success(request, f'Dear {user.username}, please go to your email {user.email} inbox and clicked on received activation link to confirm and complete the registration. Also check on spam folder.')
    else:
        messages.error(request, f'Problem sending email to {user.email}, check if you typed it correctly.')

def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        username=request.POST['username']
        email=request.POST['email']
        password=request.POST['password1']
        confirm_password=request.POST['password2']

        try:
            if password != confirm_password:
                  messages.warning(request, "Password is not matching")
                  return render(request, 'authapp/signup.html',{ 'form': form })
        except:
            pass
        try:
            if User.objects.get(username=username):
                messages.warning(request,"Username is taken")
                return render(request, 'authapp/signup.html',{ 'form': form })
        except:
            pass   
        try:
             if User.objects.get(email = email):
                messages.warning(request, "Email is taken")
                return render(request, 'authapp/signup.html',{ 'form': form })
        except:
           pass   
    
           
        if form.is_valid():
                user = form.save(commit=False)
                user.is_active = False # sets the user inactive
                user.save()
                activateEmail(request, user, form.cleaned_data.get('email'))
                messages.info(request, "Signup successful!Activate your account then  login.")
                return redirect('/authapp/login/')
                #user = User(email=email, username=username)
                #user.set_password('password')
                #user.save()
    else:
        form = SignUpForm()        

    return render(request, 'authapp/signup.html',{
                      'form': form
                  })


