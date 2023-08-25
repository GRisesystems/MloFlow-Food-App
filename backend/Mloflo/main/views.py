from . models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . serializers import *

from drf_spectacular.utils import extend_schema
from authapp.models import User

# Create your views here.


@extend_schema(responses=CustomerSerializer)
@api_view(["POST"])
def customerInfo(request):
             
    if request.method =="POST":
        serializer = CustomerSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
        
    return Response(serializer.data)

@extend_schema(responses=VendorSerializer)
@api_view(["POST"])
def vendorInfo(request):
     
    if request.method =="POST":
        serializer = VendorSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
            User.is_profile_complete ==True
            
        
    return Response(serializer.data)


@extend_schema(responses=ChefSerializer)
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
        'login':'http://127.0.0.1:8000/login/',
        'login refresh':'http://127.0.0.1:8000/login/refresh/',
        'register':'http://127.0.0.1:8000/login/refresh/'       
    }
    return Response(api_urls)


@extend_schema(responses=ChefSerializer)
@api_view(["GET"])
def getChef(request):
    
    #permission_classes = [IsAuthenticated]         
    chef = Chef.objects.all()
    serializer = ChefSerializer(chef, many = True)
            
    return Response(serializer.data)