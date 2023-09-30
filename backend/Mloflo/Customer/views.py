from rest_framework import generics
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Customer, ChefBooking
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from django.conf import settings

from .serializers import CustomerSerializer, ChefBookingSerializer

class CustomerListCreateView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ChefBookingViewSet(viewsets.ModelViewSet):
    queryset = ChefBooking.objects.all()
    serializer_class = ChefBookingSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            recipient_email = serializer.validated_data.get('email', None)
            sender_email = settings.EMAIL_HOST_USER  # Use the sender email from settings
            serializer.save()

            # Build the message content with all form fields
            message_content = f"First Name: {serializer.validated_data.get('first_name')}\n"
            message_content += f"Surname: {serializer.validated_data.get('surname')}\n"
            message_content += f"Phone Number: {serializer.validated_data.get('phone_number')}\n"
            message_content += f"Email: {serializer.validated_data.get('email')}\n"
            message_content += f"Speciality: {serializer.validated_data.get('chefSpeciality')}\n"
            message_content += f"Occasion: {serializer.validated_data.get('occasion')}\n"
            message_content += f"Location: {serializer.validated_data.get('location')}\n"
            message_content += f"From: {serializer.validated_data.get('start_date')}\n"
            message_content += f"To: {serializer.validated_data.get('end_date')}\n"
            message_content += f"Chef Requested: {serializer.validated_data.get('chef')}\n"

            # Send a confirmation email to the recipient_email if provided
            if recipient_email:
                confirmation_subject = 'Chef Request Confirmation'
                confirmation_message = 'Thank you for booking with us. Your message has been received.'
                confirmation_from_email = settings.EMAIL_HOST_USER  # Use the sender email
                confirmation_recipient_list = [recipient_email]

                send_mail(
                    confirmation_subject,
                    confirmation_message,
                    confirmation_from_email,
                    confirmation_recipient_list
                )

            # Send a notification email to the sender_email
            if sender_email:
                notification_subject = 'New Chef request'
                notification_message = f'A new chef request form booking has been received. Details:\n\n{message_content}'
                notification_from_email = sender_email  # Use the sender email
                notification_recipient_list = [sender_email]

                send_mail(
                    notification_subject,
                    notification_message,
                    notification_from_email,
                    notification_recipient_list
                )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



