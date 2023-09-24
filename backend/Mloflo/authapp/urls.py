from django.urls import path


from .views import *


urlpatterns = [  
    
    path('register/', RegisterView.as_view(), name="register"),
    path('verify-otp/', OTPVerificationView.as_view(), name='verify-otp'),
    path('regenerate-otp/', RegenerateOTPView.as_view(), name='verify-otp'),
    path("login/", LoginAPIView.as_view(), name="login"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('request-password-reset/', PasswordResetRequestView.as_view(), name='request-password-reset'),
    path('reset-password/', PasswordResetView.as_view(), name='reset-password'),
    
    
]