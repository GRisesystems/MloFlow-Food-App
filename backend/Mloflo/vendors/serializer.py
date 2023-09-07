from rest_framework import serializers
from . models import Vendor


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'vendor', 'country', 'state', 'product_category']
