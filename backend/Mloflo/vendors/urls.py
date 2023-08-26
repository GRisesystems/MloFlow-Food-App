from django.urls import path
from . import views

urlpatterns = [
    path('', views.update_vendor_details, name='update_vendor_details'),
]
