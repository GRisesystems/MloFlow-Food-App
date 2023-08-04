from rest_framework import serializers
from . models import *
#from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


#from django.contrib.auth.models import User
#from rest_framework.validators import UniqueValidator
#from django.contrib.auth.password_validation import validate_password


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"
       
        
        
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"
        
        
        
class ChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chef
        fields = "__all__"
        
        
        

    
    