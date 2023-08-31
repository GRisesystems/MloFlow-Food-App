from rest_framework import serializers
from . models import Customer


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer', 'id','country', 'county', 'city', 'office_address')
