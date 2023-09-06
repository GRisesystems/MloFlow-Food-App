from rest_framework import generics
from .models import Customer, ChefBooking
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