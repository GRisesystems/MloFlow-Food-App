from django.db import models
from django.core.validators import MinValueValidator
from Category.models import Category
from authapp.models import User
import uuid
from PIL import Image  # This is required to handle image resizing
import os
from authapp.models import User
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
# class Product(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     category = models.ForeignKey(Category,on_delete=models.SET_NULL,blank=True,null=True)
#     name = models.CharField(max_length=250)
#     description = models.CharField(max_length=250)
#     price = models.FloatField()
#     stock = models.PositiveIntegerField(validators=[MinValueValidator(10)])
#     choose_weight = models.FloatField()
#     is_available = models.BooleanField(default=True, blank=True)
#     is_sold = models.BooleanField(default=False, blank=True)
#     image = models.ImageField(upload_to='images/', blank=True, null=True)
#     #sold_products = Product.objects.filter(is_sold=True)
#     #created_by = models.ForeignKey(User, related_name='products', on_delete=models.CASCADE, default=1)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name
    

#added differnt table for product images and function for scaling
def product_images_directory(instance, filename):
    # Use the existing directory structure for images
    return f'images/{instance.product.id}/{filename}'

class ProductImage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=product_images_directory)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        img.thumbnail((800, 800))
        img.save(self.image.path)

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    price = models.FloatField()
    stock = models.PositiveIntegerField(validators=[MinValueValidator(10)])
    #changed the choose_weight variable
    weight = models.FloatField()
    is_available = models.BooleanField(default=True, blank=True)
    is_sold = models.BooleanField(default=False, blank=True)
    created_by = models.ForeignKey(User, related_name='created_products', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  # Use auto_now for updated_at
    
    def __str__(self):
        return self.name





'''Creating an order'''

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    #first_name = models.CharField(max_length=50)
    #last_name = models.CharField(max_length=50)
    #company_name = models.CharField(max_length=50)
    #country = models.CharField(max_length=200, null=True, blank=True)
    #email = models.EmailField()
    #street_address = models.CharField(max_length=250)
    #postal_code = models.CharField(max_length=20)
    #city = models.CharField(max_length=100)
    #phone = PhoneNumberField(null=False, blank=False, unique=True)
    #Addtional_info = models.TextField(null=True, blank=True)
    
    updated = models.DateTimeField(auto_now=True)
    ispaid = models.BooleanField(default=False)    
    
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    #taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
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
    
   
class ShippingAddress(models.Model):
    order = models.OneToOneField( Order, on_delete=models.CASCADE, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    company_name = models.CharField(max_length=50)
    country = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField()
    street_address = models.CharField(max_length=250)
    postal_code = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    phone = PhoneNumberField(null=False, blank=False, unique=True)
    Addtional_info = models.TextField(null=True, blank=True)
    #shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
   # _id = models.AutoField(primary_key=True, editable=False)
    
    
    class Meta:        
        verbose_name_plural = "ShippingAddresses"

    def __str__(self):
        return str(self.postal_code)