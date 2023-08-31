from rest_framework import serializers
from . models import *

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ('country', 'county', 'city', 'profile_picture', 'product_category')