from rest_framework import serializers
from .models import DeliveryAddress, Order, OrderItem



class DeliveryAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = "__all__"
        
    def create(self, validated_data):
        """
        Create and return a new DeliveryAddress instance, given the validated data.
        """
        return DeliveryAddress.objects.create(**validated_data)
        
        

'''create order serializers'''

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"      
        

     
    
#class OrderSerializer(serializers.ModelSerializer):
   # orderItems = serializers.SerializerMethodField(read_only=True)
    #shippingAddress = serializers.SerializerMethodField(read_only=True)
    #user = serializers.SerializerMethodField(read_only=True)

    #class Meta:
       # model = Order
       # fields = '__all__'

    #def get_orderItems(self, obj):
       # items = obj.orderitem_set.all()
        #serializer = OrderItemSerializer(items, many=True)
       # return serializer.data

    #def get_shippingAddress(self, obj):
        #try:
            #address = ShippingAddressSerializer(
               # obj.shippingaddress, many=False).data
        #except:
            #address = False
       # return address

    #def get_user(self, obj):
       # user = obj.user
       # serializer = UserCreateSerializer(user, many=False)
        #return serializer.data
