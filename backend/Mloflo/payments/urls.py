from django.urls import path
from . import views

urlpatterns = [
    # path('mpesa', views.mpesa_payment, name='mpesa_payment'),
    path('mpesa', views.initiate_stk_push, name='mpesa_payment'),
    path('callback', views.mpesa_callback, name='mpesa_callback'),
]
