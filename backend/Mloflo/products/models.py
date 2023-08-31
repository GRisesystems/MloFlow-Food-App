from django.db import models
from django.core.validators import MinValueValidator
from Category.models import Category
from authapp.models import User
import uuid
<<<<<<< HEAD
from PIL import Image  # This is required to handle image resizing
import os
from authapp.models import User


=======
>>>>>>> origin/Development
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
