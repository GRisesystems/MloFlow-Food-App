import uuid
from django.db import models

# Create your models here.


class Category(models.Model):
    id = models.UUIDField(primary_key=True, unique=True,
                          editable=False, default=uuid.uuid4)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('name',)
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name
