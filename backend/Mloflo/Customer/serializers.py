from rest_framework import serializers
from . models import Customer, ChefBooking


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer', 'id','country', 'county', 'city', 'office_address')

from rest_framework import serializers

class ChefBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChefBooking
        fields = '__all__'