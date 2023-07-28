from django.shortcuts import redirect,render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

# Create your views here.
def signup(request):

    if request.method=="POST":
        get_email=request.POST.get('email')
        get_password=request.POST.get('pass1')
        get_confirm_password=request.POST.get('pass2')
        if get_password != get_confirm_password:
            messages.info(request,"Password is not matching!!")
            return redirect('/auth/signup/')
        
        try:
            if User.objects.get(username=get_email):
                messages.warning(request,"Email is already taken!!")
                return redirect('/auth/signup/')
        except Exception as identifier:
            pass
        myuser=User.objects.create_user(get_email, get_password)
        myuser.save()
        messages.success(request,"User is Created, Please Login!!")
        return redirect('/auth/login/')
    return render(request,'signup.html')

def handleLogin(request):
    if request.method=="POST":
       get_email=request.POST.get('email')
       get_password=request.POST.get('pass1')
       myuser= authenticate( username=get_email, password=get_password )
        
       if myuser is not None:
         login(request,myuser)
       messages.success(request,"Login Success!!")
       return redirect('/')
    else:
       messages.error(request,"Invalid Credentials")
       return render(request,'login.html')



def handleLogout(request): 
    logout(request)
    messages.success(request,"Logged out Successfully!!")
    return render(request,'login.html')  


def customerInfo(request):
             
    if request.method =="POST":
        form = customerForm(request.POST,request.FILES)              
        if form.is_valid():
            form.save()
            messages.success = (request, "your information was succefully updated ")
            return redirect("home")
            
    else:
        form = customerForm()
       
    
    context = {
            "form": form,           
              }
    return render(request,'accounts/informationForm.html',context)


def vendorInfo(request):
     
    if request.method =="POST":
        form = vendorForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return redirect("/")
        
    else:
        form = vendorForm()
    
    context = {
            "form": form
              }
    return render(request,'accounts/informationForm.html',context)


def chefInfo(request):
  
    if request.method =="POST":        
        form = chefForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return redirect("/")
        
    else:
        form = chefForm()
    
    context = {
            "form": form
              }
    return render(request,'accounts/informationForm.html',context)


def index(request):
    
    context = {}
    return render(request, 'accounts/index.html')