from django.db import models
import uuid
from authapp.models import User


class Chef(models.Model):
    chef_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    #chef = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    country = models.CharField(max_length=100,null = True, blank = False)
    county = models.CharField(max_length=100,null = True, blank = False)
    city = models.CharField(max_length=100,null = True, blank = False)
    image = models.ImageField(upload_to='chef_images/',null = True, blank = False)
    speciality = models.CharField(max_length = 200,null = True, blank = False)
    qualifications = models.CharField(max_length = 200,null = True, blank = False)
    qualification_images = models.ImageField(upload_to='qualification_images/',null = True, blank = False)
    star_rating = models.DecimalField(max_digits=3, decimal_places=2,null = True, blank = False)
    is_available = models.BooleanField(default=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Chefs"
        ordering = ["chef_id"]
        
    def __str__(self):
        return f" {self.chef_id}"