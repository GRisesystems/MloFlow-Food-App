from main import views
from django.urls import path
from .views import *



urlpatterns = [
    path('', views.index, name='home'),
   # path('customer/', views.customerInfo, name = "customer"),
]