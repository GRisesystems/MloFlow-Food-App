from django.db import models
from authapp.models import User
import uuid
from products.models import Product
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

'''Creating an order'''

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)    
    updated = models.DateTimeField(auto_now=True)
    ispaid = models.BooleanField(default=False)    
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)    
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField( max_digits=7, decimal_places=2, null=True, blank=True)    
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    order_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    

    def __str__(self):
        return str(self.createdAt)
    
    
    
    class Meta:        
        verbose_name_plural = "Orders"
        ordering = ['-createdAt']
        indexes = [
        models.Index(fields=['-createdAt']),
        ]
        
    
    
    
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    quantity = models.PositiveIntegerField(null=True, blank=True, default=0)
    
    image = models.CharField(max_length=200, null=True, blank=True)
    orderItem_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    
    class Meta:        
        verbose_name_plural = "OrderItems"

    def __str__(self):
        return str(self.name)
    
   
class DeliveryAddress(models.Model):
    #order = models.OneToOneField( Order, on_delete=models.CASCADE, null=True, blank=True)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    address1 = models.CharField(max_length=250)
    address2 = models.CharField(max_length=250)
    town = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.CharField(max_length=20)
    country = models.CharField(max_length=200, null=True, blank=True)
    phone = PhoneNumberField(null=False, blank=False, unique=False)
    #company_name = models.CharField(max_length=50)    
    #email = models.EmailField()    
    #Additional_info = models.TextField(null=True, blank=True)
    #shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
   # _id = models.AutoField(primary_key=True, editable=False)
    
    
    class Meta:        
        verbose_name_plural = "DeliveryAddresses"

    def __str__(self):
        return f"{self.address1} , {self.town}"
