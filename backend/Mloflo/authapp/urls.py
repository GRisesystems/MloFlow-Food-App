from django.urls import path


from .views import *


from . import views

urlpatterns = [  
    
    path('register/', RegisterView.as_view(), name="register"),
    path('verify-otp/', OTPVerificationView.as_view(), name='verify-otp'),
    path('regenerate-otp/', views.generate_and_send_otp, name='verify-otp'),
    path("login/", views.LoginView.as_view(), name="login"),
    
]