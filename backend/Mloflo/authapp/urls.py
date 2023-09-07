from django.urls import path


from .views import *
#from .views import MyTokenObtainPairView

#from rest_framework_simplejwt.views import (
  #  TokenRefreshView,
#)

from . import views

urlpatterns = [  
    
    #path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("login/", views.LoginView.as_view(), name="login"),
]