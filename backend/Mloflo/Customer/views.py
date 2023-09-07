from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Customer, ChefBooking
from django.core.mail import send_mail
from .serializers import VendorSerializer, ChefBookingSerializer

class CustomerListCreateView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = VendorSerializer

class CustomerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = VendorSerializer

class ChefBookingListCreateView(generics.ListCreateAPIView):
    queryset = ChefBooking.objects.all()
    serializer_class = ChefBookingSerializer

class ChefBookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChefBooking.objects.all()
    serializer_class = ChefBookingSerializer



