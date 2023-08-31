from . models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . serializers import *

from drf_spectacular.utils import extend_schema

# Create your views here.


@extend_schema(responses=CustomerSerializer)
@api_view(["POST"])
def customerInfo(request):
             
    if request.method =="POST":
        serializer = CustomerSerializer(data =request.data)
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

