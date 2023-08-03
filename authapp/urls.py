from authapp import views
from django.urls import path

from .views import *

urlpatterns = [
    
    path('signup/',views.signup, name='signup'),
    path('login/',views.handleLogin, name='handleLogin'),
    path('logout/',views.handleLogout, name='handleLogout'),
    
    
    path('', views.index, name = "home"),
    path('customer/', views.customerInfo, name = "customer"),
    path('vendor/', views.vendorInfo, name = "vendor"),
    path('chef/', views.chefInfo, name = "chef"),
    path('chefs_list/', views.getChef, name = "chefs_list"),
]