from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Customer
from authapp.models import User

@receiver(post_save, sender=Customer)
def update_profile_complete_flag(sender, instance, **kwargs):
    #Assuming 'instance.user' is the related user of the Vendor instance
    if instance.customer:
        instance.customer.is_profile_complete = True
        instance.customer.save()

