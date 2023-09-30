from django.db import models
from django.core.validators import MinValueValidator
# from Category.models import Category
from authapp.models import User
from Category.models import Category
import uuid
# from PIL import Image  # This is required to handle image resizing
# import os




#Create your models here.
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #category = models.ForeignKey(Category,on_delete=models.SET_NULL,blank=True,null=True)
    category = models.CharField(max_length=250, blank=True, null=True)
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=9,decimal_places=2)
    stock = models.PositiveIntegerField(validators=[MinValueValidator(10)])
    weight = models.DecimalField(max_digits=9,decimal_places=2)
    is_available = models.BooleanField(default=True, blank=True)
    is_sold = models.BooleanField(default=False, blank=True)
    #changed variable naming for images
    imageOne = models.ImageField(upload_to='images/', blank=True, null=True)
    imageTwo = models.ImageField(upload_to='images/', blank=True, null=True)
    imageThree = models.ImageField(upload_to='images/', blank=True, null=True)
    imageFour = models.ImageField(upload_to='images/', blank=True, null=True)
    #sold_products = Product.objects.filter(is_sold=True)
    #created_by = models.ForeignKey(User, related_name='products', on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
