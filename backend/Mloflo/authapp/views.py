from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework import generics, status
from rest_framework import generics, status, views, permissions
from .serializers import RegisterSerializer 
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from .utils import Util
from django.conf import settings
from .utils import Util
import datetime
import random
from django.conf import settings
from django.utils import timezone
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User  
from .serializers import OTPVerificationSerializer, RegenerateOTPSerializer, LoginSerializer, PasswordResetRequestSerializer, PasswordResetSerializer , LogoutSerializer
from datetime import datetime, timedelta
from django.core.exceptions import ObjectDoesNotExist





class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        try:
            user_data = request.data
            serializer = self.serializer_class(data=user_data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            user_data = serializer.data

            user = User.objects.get(email=user_data['email'])
            otp = user.otp
            email_body = 'Hi ' + user.first_name + \
                ' your OTP is \n' + otp
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Verify your email'}

            Util.send_email(data)

            return Response(user_data, status=status.HTTP_201_CREATED)

        except Exception as e:            
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    




class OTPVerificationView(APIView):
    def post(self, request):        
        serializer = OTPVerificationSerializer(data=request.data)
        if serializer.is_valid():                       
            email = serializer.validated_data['email'] 

            try:
                user = User.objects.get(email=email)  
            except user.DoesNotExist:
                return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            if (not user.is_active and user.otp == request.data.get("otp") and user.otp_expiry and timezone.now() < user.otp_expiry):
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



class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
    


class PasswordResetRequestView(APIView):
    def post(self, request):
        try:
            serializer = PasswordResetRequestSerializer(data=request.data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                otp = random.randint(100000, 999999)
                            
                user = User.objects.get(email=email)
                user.reset_password_otp = otp
                user.save()
                
                subject = 'Your OTP for password reset'
                email_body = f'Your OTP is: {otp}'
                data = {'email_body': email_body, 'to_email': user.email,
                                'email_subject': subject}

                # Send the OTP to the user via email
                Util.send_email(data)

                return Response({'message': 'OTP sent successfully'}, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        

class PasswordResetView(APIView):
    def post(self, request):
        try:
            serializer = PasswordResetSerializer(data=request.data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                otp = serializer.validated_data['otp']
                new_password = serializer.validated_data['new_password']
                confirm_password = serializer.validated_data['confirm_password']
                user = User.objects.get(email = email)
                              
                if otp != user.reset_password_otp:
                    return Response({'error': 'otp do not match'}, status=status.HTTP_400_BAD_REQUEST)

                
                if new_password != confirm_password:
                    return Response({'error': 'New passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

               
                password = new_password
                user.set_password(password)
                user.save()

                          
                return Response({'message': 'Password reset successful'}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        
class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    #permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)
    