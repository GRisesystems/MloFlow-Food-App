from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Chef
from authapp.models import User

@receiver(post_save, sender=Chef)
def update_profile_complete_flag(sender, instance, **kwargs):
    # Assuming 'instance.user' is the related user of the chef instance
    if instance.chef:
        instance.chef.is_profile_complete = True
        instance.chef.save()