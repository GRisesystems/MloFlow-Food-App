from django.shortcuts import render,redirect
from django.contrib import messages
from .forms import customerForm, vendorForm, chefForm

# Create your views here.
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
    return render(request,'main/informationForm.html',context)


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
    return render(request,'main/informationForm.html',context)


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
    return render(request,'main/informationForm.html',context)


def index(request):
    
    context = {}
    return render(request, 'main/index.html')
