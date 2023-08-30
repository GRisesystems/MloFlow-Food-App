import uuid
from django.db import models
from django.utils import timezone
from django.conf import settings
from Category.models import Category


class Vendor(models.Model):
    id = models.UUIDField(primary_key=True, unique=True,editable=False, default=uuid.uuid4)
    vendor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    country = models.CharField(max_length=200)
    county = models.CharField(max_length=200)
    city = models.CharField(max_length=200, blank=True, null=True)
    product_category = models.ManyToManyField(Category)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.vendor.first_name} {self.vendor.surname}'