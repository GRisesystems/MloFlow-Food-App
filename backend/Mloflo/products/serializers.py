from rest_framework import serializers
from Category.models import Category
from .models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ( "name","category","description", "price", "stock", "weight", "image")
        read_only_fields = ['created_by']
        fields ='__all__'


