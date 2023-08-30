# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from .models import Vendor
# from authapp.models import User

# @receiver(post_save, sender=Vendor)
# def update_profile_complete_flag(sender, instance, **kwargs):
#     # Assuming 'instance.user' is the related user of the Vendor instance
#     if instance.user:
#         instance.user.is_profile_complete = True
#         instance.user.save()