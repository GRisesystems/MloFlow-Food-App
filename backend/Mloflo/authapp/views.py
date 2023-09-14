# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
# from .models import User
# import uuid
from rest_framework.response import Response
# import jwt


from .tokens import create_jwt_pair_for_user
from rest_framework.views import APIView
from rest_framework.request import Request
from django.contrib.auth import authenticate,get_user_model
from rest_framework import generics, status
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.contrib import messages
from django.shortcuts import redirect


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
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
#from .renderers import UserRenderer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
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
from .serializers import OTPVerificationSerializer

from datetime import datetime, timedelta
from django.core.exceptions import ObjectDoesNotExist

from django.views.decorators.csrf import csrf_exempt



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
            email = serializer.validated_data['email']  # Assuming you include the email in the request

            try:
                user = User.objects.get(email=email)  # Replace 'email' with the actual field name in your User model
            except user.DoesNotExist:
                return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            stored_otp = user.otp  # Replace 'otp' with the actual field name in your User model
            
            
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

    

#@csrf_exempt
def generate_and_send_otp(email):
    try:
        # Fetch the user by email address
        user = User.objects.get(email=email)  # Replace with the actual field name in your User model

        if int(user.max_otp_try) == 0 and timezone.now() < user.otp_max_out:
            return Response(
                "Max OTP try reached, try after an hour",
                status=status.HTTP_400_BAD_REQUEST,
            )

        otp = random.randint(1000, 9999)
        otp_expiry = timezone.now() + datetime.timedelta(minutes=10)
        max_otp_try = int(user.max_otp_try) - 1

        user.otp = otp
        user.otp_expiry = otp_expiry
        user.max_otp_try = max_otp_try
        #print(otp)
        if max_otp_try == 0:
                 #Set cool down time
            otp_max_out = timezone.now() + datetime.timedelta(hours=1)
            user.otp_max_out = otp_max_out
        elif max_otp_try == -1:
            user.max_otp_try = settings.MAX_OTP_TRY
        else:
            user.otp_max_out = None
            user.max_otp_try = max_otp_try
            user.save()    


        # Send the new OTP to the user via email
        email_body = f"Your new OTP is {otp}"
        Util.send_email(email, "OTP Regenerated", email_body)  # Replace with your email sending logic

        return Response("New OTP generated and sent successfully.",status=status.HTTP_200_OK)
    except ObjectDoesNotExist:
        return "User not found."


class LoginView(APIView):
    permission_classes = []

    def post(self, request: Request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if user is not None:
            if user.last_login is not None:
                user.if_first_time_login = False
                user.save()

            tokens = create_jwt_pair_for_user(user)
            email = user.email
            first_name = user.first_name
            surname = user.surname
            if_first_time_login = user.if_first_time_login
            is_profile_complete = user.is_profile_complete
            category = user.category

            response = {"tokens": tokens, "email": email, "first_name": first_name, "surname": surname,
                        "category": category, "first_time_login": if_first_time_login, 'is_profile_complete': is_profile_complete}
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid email or password"})

    def get(self, request: Request):
        content = {"user": str(request.user), "auth": str(request.auth)}

        return Response(data=content, status=status.HTTP_200_OK)


#def activate_account(request, uidb64, token):
    # Account Activation link
   # User = get_user_model()
   # try:
        # Decode the user ID from the URL
       # uid = force_str(urlsafe_base64_decode(uidb64))

        # Get the user associated with the ID
        #user = User.objects.get(pk=uid)

        # Verify the token
       # if default_token_generator.check_token(user, token):
            # Activate the user's account
          #  user.is_active = True
           # user.save()

            # Redirect to success or login page
           # messages.success(
              #  request, 'Account Activated successfully. You can now login', extra_tags='success')
            ##return redirect('redirect_home_view')
       # else:
            # Invalid token, show an error page or redirect to an error page
         #   messages.error(request, 'Invalid token', extra_tags='danger')
        #    return redirect('redirect_home_view')
   # except (User.DoesNotExist, ValueError, TypeError):
        # User not found or invalid URL, show an error page or redirect to an error page
       # messages.error(request, 'Account does not exist', extra_tags='danger')
       # return redirect('redirect_home_view')
