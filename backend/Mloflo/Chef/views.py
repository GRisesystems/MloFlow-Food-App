from rest_framework import viewsets
from .models import Chef
from .serializers import ChefSerializer

class ChefViewSet(viewsets.ModelViewSet):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer











# from django.shortcuts import render
# from . models import *
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from . serializers import *

# from drf_spectacular.utils import extend_schema

# # Create your views here.
# @extend_schema(responses=ChefSerializer)
# @api_view(["POST"])
# def chefInfo(request):
  
#     if request.method =="POST":
#         serializer = ChefSerializer(data =request.data)
#         if serializer.is_valid():
#             serializer.save()
        
#     return Response(serializer.data)

# @extend_schema(responses=ChefSerializer)
# @api_view(["GET"])
# def getChef(request):
    
#     #permission_classes = [IsAuthenticated]         
#     chef = Chef.objects.all()
#     serializer = ChefSerializer(chef, many = True)
            
#     return Response(serializer.data)