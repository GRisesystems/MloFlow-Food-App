
from rest_framework.response import Response



from .tokens import create_jwt_pair_for_user
from rest_framework.views import APIView
from rest_framework.request import Request
from django.contrib.auth import authenticate,get_user_model
from rest_framework import generics, status
from django.utils.encoding import force_str
#from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
#from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
#from django.contrib import messages
#from django.shortcuts import redirect


from django.shortcuts import render
from rest_framework import generics, status, views, permissions
from .serializers import RegisterSerializer 
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import settings
#from drf_yasg.utils import swagger_auto_schema
#from drf_yasg import openapi
#from .renderers import UserRenderer
#from django.contrib.auth.tokens import PasswordResetTokenGenerator
#from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
#from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
#from django.contrib.sites.shortcuts import get_current_site
#from django.urls import reverse
from .utils import Util
from django.shortcuts import redirect
from django.http import HttpResponsePermanentRedirect
import os


import datetime
import random

from django.conf import settings
from django.utils import timezone
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework.decorators import api_view


from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User  
from .serializers import OTPVerificationSerializer, RegenerateOTPSerializer, LoginSerializer

from datetime import datetime, timedelta
from django.core.exceptions import ObjectDoesNotExist

#from django.views.decorators.csrf import csrf_exempt



class RegisterView(generics.GenericAPIView):

    serializer_class = RegisterSerializer
    

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        user = User.objects.get(email=user_data['email'])        
        otp = user.otp        
        email_body = 'Hi '+user.first_name + \
            ' your OTP is \n' + otp
        data = {'email_body': email_body, 'to_email': user.email,
                'email_subject': 'Verify your email'}

        Util.send_email(data)
        return Response(user_data, status=status.HTTP_201_CREATED)
    
    




class OTPVerificationView(APIView):
    def post(self, request):        
        serializer = OTPVerificationSerializer(data=request.data)
        if serializer.is_valid():            
            otp = serializer.validated_data['otp']            
            email = serializer.validated_data['email'] 

            try:
                user = User.objects.get(email=email)  
            except user.DoesNotExist:
                return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            stored_otp = user.otp  
            
            
            if (not user.is_active and otp == request.data.get("otp") and user.otp_expiry and timezone.now() < user.otp_expiry):
                user.is_active = True
                user.otp_expiry = None
                user.max_otp_try = settings.MAX_OTP_TRY
                user.otp_max_out = None
                user.save()
                return Response(
                "Successfully verified the user.", status=status.HTTP_200_OK
                )
            return Response("User active or Please enter the correct OTP.", status=status.HTTP_400_BAD_REQUEST,)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    

class RegenerateOTPView(APIView):
    def post(self, request):
        serializer = RegenerateOTPSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)

                # Convert user.max_otp_try to an integer before comparison
                max_otp_try = int(user.max_otp_try)

                if max_otp_try == 0 and timezone.now() < user.otp_max_out:
                    return Response(
                        "Max OTP try reached, try after an hour",
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                # Check if the user has exceeded the maximum OTP regeneration limit (3 times)
                if max_otp_try <= 3:
                    otp = random.randint(1000, 9999)
                    otp_expiry = timezone.now() + timedelta(minutes=10)
                    max_otp_try -= 1  # Decrement the count

                    user.otp = otp
                    user.otp_expiry = otp_expiry
                    user.max_otp_try = str(max_otp_try)  # Convert back to string for storage

                    if max_otp_try == 0:
                        otp_max_out = timezone.now() + timedelta(hours=1)
                        user.otp_max_out = otp_max_out
                    elif max_otp_try == -1:
                        user.max_otp_try = settings.MAX_OTP_TRY
                    else:
                        user.otp_max_out = None
                    user.save()

                    # Send the new OTP to the user via email
                    email_body = f"Your new OTP is {otp}"
                    data = {'email_body': email_body, 'to_email': user.email,
                            'email_subject': 'Verify your email'}
                    Util.send_email(data)

                    return Response("New OTP generated and sent successfully.", status=status.HTTP_200_OK)
                else:
                    return Response(
                        "OTP regeneration limit exceeded, please contact support.",
                        status=status.HTTP_400_BAD_REQUEST,
                    )

            except ObjectDoesNotExist:
                return Response("User not found.", status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#class LoginView(APIView):
    #permission_classes = []

    #def post(self, request: Request):
        #email = request.data.get("email")
       # password = request.data.get("password")

        #user = authenticate(email=email, password=password)

        #if user is not None:
           # if user.last_login is not None:
              #  user.if_first_time_login = False
               # user.save()

            #tokens = create_jwt_pair_for_user(user)
            #email = user.email
            #first_name = user.first_name
            #surname = user.surname
            #if_first_time_login = user.if_first_time_login
            #is_profile_complete = user.is_profile_complete
           # category = user.category

           # response = {"tokens": tokens, "email": email, "first_name": first_name, "surname": surname,
             #           "category": category, "first_time_login": if_first_time_login, 'is_profile_complete': is_profile_complete}
           # return Response(data=response, status=status.HTTP_200_OK)

       # else:
         #   return Response(data={"message": "Invalid email or password"})

    #def get(self, request: Request):
       # content = {"user": str(request.user), "auth": str(request.auth)}

       # return Response(data=content, status=status.HTTP_200_OK)


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)