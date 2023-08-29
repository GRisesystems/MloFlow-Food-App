from .models import Product
from rest_framework import serializers

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        # fields = ("name", "description", "country", "county", "city", "category", "weight" "price", "stock", "image")
        fields = '__all__'