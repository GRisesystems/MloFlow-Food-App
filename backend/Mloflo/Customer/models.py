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
    
class ChefBooking(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, default=uuid.uuid4)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    chef = models.ForeignKey(User, on_delete=models.CASCADE, related_name='booked_by_chef')
    first_name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField()
    chefSpeciality = models.CharField(max_length=200)
    occasion = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedt = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'{self.customer.first_name}{self.customer.surname}'
    class Meta:
        verbose_name_plural = 'Chef Bookings'
        ordering = ['-createdAt']
        indexes = [
            models.Index(fields=['-createdAt']),
        ]