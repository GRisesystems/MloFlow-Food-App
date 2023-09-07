from django.db import models
import uuid
from authapp.models import User
# Create your models here.

#class Customer(models.Model): 
   # customer_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    #user = models.OneToOneField(User,null = True, on_delete = models.CASCADE,blank=True )
    #home_address = models.CharField(max_length = 200,null = True)
    #office_address = models.CharField(max_length = 200,null = True)
    #class Meta:
      #  verbose_name_plural = "Customers"
      #  ordering = ["customer_id"]
        
   # def __str__(self):
      #  return f" {self.user.first_name}"

# class Vendor(models.Model):
    
#     CATEGORY = (
#         ("foo","foo"),
#         ("bar","bar"),
#         ("baz","baz")
#     )
    
#     vendor_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
#     user = models.OneToOneField(User,null = True, on_delete = models.CASCADE,blank=True )
#     category = models.CharField(max_length = 200,null = True, choices = CATEGORY)
#     location = models.CharField(max_length = 200,null = True,)
    
#     class Meta:
#         verbose_name_plural = "Vendors"
#         ordering = ["vendor_id"]
        
#     def __str__(self):
#         return f" {self.user}"
