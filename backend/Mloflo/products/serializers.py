from rest_framework import serializers
from .models import Product, ProductImage
from authapp.models import User


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('id', 'image',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')  # Customize the fields you want to expose

class ProductSerializer(serializers.HyperlinkedModelSerializer):
     created_by = UserSerializer(read_only=True)
     images = ProductImageSerializer(many=True, read_only=True)

     class Meta:
        model = Product
        fields = ( "name", "category", "description", "price", "stock", "choose_weight", "images")
        read_only_fields = ['created_by']
        fields ='__all__'


