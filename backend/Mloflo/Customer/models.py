import uuid
from django.db import models
from authapp.models import User


class Customer(models.Model):    
    id = models.UUIDField(primary_key=True, unique=True,editable=False, default=uuid.uuid4)
    customer = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=200)
    county = models.CharField(max_length=200)
    city = models.CharField(max_length=200, blank=True, null=True)
    office_address = models.CharField(max_length=200, blank=True, null=True)  
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.customer.first_name} {self.customer.surname}'