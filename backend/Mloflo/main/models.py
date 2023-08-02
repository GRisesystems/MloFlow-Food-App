from django.db import models
import uuid
from django.contrib.auth.models import User

# Create your models here.

class Customer(models.Model): 
    customer_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.OneToOneField(User,null = True, on_delete = models.CASCADE,blank=True )
    home_address = models.CharField(max_length = 200,null = True)
    office_address = models.CharField(max_length = 200,null = True)
   
    
    class Meta:
        verbose_name_plural = "Customers"
        ordering = ["customer_id"]
        
    def __str__(self):
        return f" {self.user.first_name}"

class Vendor(models.Model):
    
    CATEGORY = (
        ("foo","foo"),
        ("bar","bar"),
        ("baz","baz")
    )
    
    vendor_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.OneToOneField(User,null = True, on_delete = models.CASCADE,blank=True )
    category = models.CharField(max_length = 200,null = True, choices = CATEGORY)
    location = models.CharField(max_length = 200,null = True,)
    
    class Meta:
        verbose_name_plural = "Vendors"
        ordering = ["vendor_id"]
        
    def __str__(self):
        return f" {self.user}"

class Chef(models.Model):
    chef_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.OneToOneField(User,null = True, on_delete = models.CASCADE,blank=True )
    speciality = models.CharField(max_length = 100,null = True, blank = False)
    description = models.TextField(max_length = 250,null = True, blank = False)
    qualifications = models.CharField(max_length = 200,null = True, blank = False)
    
    class Meta:
        verbose_name_plural = "Chefs"
        ordering = ["chef_id"]
        
    def __str__(self):
        return f" {self.user}"

