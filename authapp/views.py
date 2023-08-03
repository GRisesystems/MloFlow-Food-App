#from django.shortcuts import render, redirect
#from django.contrib import messages
#from . forms import *

from . models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . serializers import *


# Create your views here.


@api_view(["POST"])
def customerInfo(request):
             
    if request.method =="POST":
        serializer = CustomerSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
        
    return Response(serializer.data)

@api_view(["POST"])
def vendorInfo(request):
     
    if request.method =="POST":
        serializer = VendorSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
        
    return Response(serializer.data)

@api_view(["POST"])
def chefInfo(request):
  
    if request.method =="POST":
        serializer = ChefSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
        
    return Response(serializer.data)

@api_view(["GET"])
def index(request):
    api_urls = {
        'post customer Information' :'http://127.0.0.1:8000/customer/',
        'post vendor Information': 'http://127.0.0.1:8000/vendor/',
        'post chef Information':'http://127.0.0.1:8000/chef/',    
        'see chefs available':'http://127.0.0.1:8000/chefs_list/',     
    }
    return Response(api_urls)

@api_view(["GET"])
def getChef(request):
             
    chef = Chef.objects.all()
    serializer = ChefSerializer(chef, many = True)
            
    return Response(serializer.data)