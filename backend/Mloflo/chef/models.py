import uuid
from django.db import models
from django.utils import timezone
from django.conf import settings
from Category.models import Category


# Create your models here.

class Chef(models.Model):
    id = models.UUIDField(primary_key=True, unique=True,
                          editable=False, default=uuid.uuid4)
    Chef = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    star_rating = models.DecimalField(max_digits=3, decimal_places=2)
    chef_image = models.ImageField(upload_to='chef_images/')
    qualification_image = models.ImageField(upload_to='qualification_images/')
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
def __str__(self):
        return f'{self.chef.first_name} {self.chef.surname}'