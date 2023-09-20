from djoser.serializers import UserCreateSerializer

from django.contrib.auth import get_user_model
User = get_user_model()



class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = "__all__"
        
        
        

from rest_framework import serializers
from .models import User
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode


from datetime import datetime, timedelta
import random
from django.conf import settings


from .tokens import create_jwt_pair_for_user

#from rest_framework.exceptions import AuthenticationFailed


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=8, write_only=True)
    re_password = serializers.CharField(max_length=68, min_length=8, write_only=True)

   

    class Meta:
        model = User
        fields = ['id','email', 'first_name','surname', 'phone' ,'home_address','category', 'password', 're_password' ]

    def validate(self, attrs):        
        
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        re_password = attrs.get('re_password', '')        

        if password != re_password:
            raise serializers.ValidationError("Password and confirmation password do not match.")
        
        return attrs

  
        
        
        
        
    def create(self, validated_data):
        """
        Create method.

        Used to create the user
        """
        otp = random.randint(1000, 9999)
        otp_expiry = datetime.now() + timedelta(minutes = 10)
        
        validated_data.pop('re_password', None)  # Remove confirmation password

        user = User(
            phone=validated_data["phone"],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            surname=validated_data["surname"],
            home_address=validated_data["home_address"],
            category=validated_data["category"],
            otp=otp,
            otp_expiry=otp_expiry,
            max_otp_try=settings.MAX_OTP_TRY
        )
        user.set_password(validated_data["password"])
        user.save()
        #Util.send_email( otp)
        return user    
    
class OTPVerificationSerializer(serializers.Serializer):
    otp = serializers.IntegerField(write_only=True)
    email =serializers.EmailField()
    
    class Meta:
        model = User
        fields = ['email','otp']


class RegenerateOTPSerializer(serializers.Serializer):    
    email =serializers.EmailField()
    
    class Meta:
        model = User
        fields = ['email']
        
        
class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(
        max_length=68, min_length=8, write_only=True)
    tokens = serializers.CharField( read_only=True)
    first_name = serializers.CharField(read_only=True)
    surname = serializers.CharField(read_only=True)
    if_first_time_login = serializers.BooleanField(read_only=True)
    is_profile_complete = serializers.BooleanField(read_only=True)
    category = serializers.CharField(read_only=True)

    tokens = serializers.SerializerMethodField()

    def get_tokens(self, obj):
        user = User.objects.get(email=obj['email'])

        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }

    class Meta:
        model = User
        fields = ['email', 'password', 'tokens','first_name','surname','if_first_time_login',
                  'is_profile_complete','category']

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        filtered_user_by_email = User.objects.filter(email=email)
        
        
        user = auth.authenticate(email=email, password=password)        
        

      
       
        
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
       
        
        if user.last_login is not None:
               user.if_first_time_login = False
               user.save()

        return {
            'email': user.email,            
            'tokens': user.tokens,
            'first_name' : user.first_name,
            'surname' : user.surname,           
            'if_first_time_login' : user.if_first_time_login,
            'is_profile_complete' : user.is_profile_complete,
            'category' : user.category
        }

        return super().validate(attrs)