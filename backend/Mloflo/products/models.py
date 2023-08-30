from django.db import models
from django.core.validators import MinValueValidator
from Category.models import Category
from rest_framework import serializers
from authapp.models import User
import uuid
# Create your models here.
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Category,on_delete=models.SET_NULL,blank=True,null=True)
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    price = models.FloatField()
    stock = models.PositiveIntegerField(validators=[MinValueValidator(10)])
    choose_weight = models.FloatField()
    is_available = models.BooleanField(default=True, blank=True)
    is_sold = models.BooleanField(default=False, blank=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    #sold_products = Product.objects.filter(is_sold=True)
    #created_by = models.ForeignKey(User, related_name='products', on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
   