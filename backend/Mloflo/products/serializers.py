from rest_framework import serializers
from .models import *
from authapp.models import User
from authapp.serializers import UserCreateSerializer


# class ProductImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ProductImage
#         fields = ('id', 'image',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')  # Customize the fields you want to expose

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    #  created_by = UserSerializer(read_only=True)
    #  images = ProductImageSerializer(many=True, read_only=True)

     class Meta:
        model = Product
        fields = ("id","name", "category", "description", "price", "stock", "weight", "imageOne", "imageTwo", "imageThree", "imageFour")
        # read_only_fields = ['created_by']
        #fields ='__all__'




'''create order serializers'''

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"
        
        
        
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = "__all__"
       
     
    
class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data

    def get_shippingAddress(self, obj):
        try:
            address = ShippingAddressSerializer(
                obj.shippingaddress, many=False).data
        except:
            address = False
        return address

    def get_user(self, obj):
        user = obj.user
        serializer = UserCreateSerializer(user, many=False)
        return serializer.data
