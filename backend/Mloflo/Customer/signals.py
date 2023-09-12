from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Customer,ChefBooking
from authapp.models import User
from Chef.models import Chef
from django.core.mail import send_mail
from django.contrib.auth import get_user_model


@receiver(post_save, sender=Customer)
def update_profile_complete_flag(sender, instance, **kwargs):
    #Assuming 'instance.user' is the related user of the Vendor instance
    if instance.customer:
        instance.customer.is_profile_complete = True
        instance.customer.save()

@receiver(post_save, sender=ChefBooking)
def send_booking_confirmation_email(sender, instance, created, **kwargs):
    if created:  # Send email only when a new ChefBooking is created, not when it's updated
        User = get_user_model()
        customer = User.objects.get(id=instance.customer_id)
        customer_email = customer.email

        subject = 'Chef Booking Confirmation'
        message = 'Thank you for booking a chef!'
        from_email = 'faithsang001@gmail.com'  # Update with your email
        recipient_list = [customer_email]

        send_mail(subject, message, from_email, recipient_list)
