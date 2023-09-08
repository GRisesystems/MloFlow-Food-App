from django.shortcuts import render
from rest_framework import viewsets
from .models import ContactUs
from .serializers import ContactUsSerializer
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from django.conf import settings

class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
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
            message_content += f"Message:\n{serializer.validated_data.get('message')}"

            # Send a confirmation email to the recipient_email if provided
            if recipient_email:
                confirmation_subject = 'Contact Us Submission Confirmation'
                confirmation_message = 'Thank you for contacting us. Your message has been received.'
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
                notification_subject = 'New Contact Us Submission'
                notification_message = f'A new contact form submission has been received. Details:\n\n{message_content}'
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

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         sender_email = settings.EMAIL_HOST_USER
    #         serializer.save()

    #         recipient_email = serializer.validated_data.get('email', None)

    #         # Send a confirmation email to the sender_email
    #         if sender_email:
    #             confirmation_subject = 'Contact Us Submission Confirmation'
    #             confirmation_message = 'Thank you for contacting us. Your message has been received.'
    #             confirmation_from_email = settings.EMAIL_HOST_USER
    #             confirmation_recipient_list = [sender_email]

    #             send_mail(
    #                 confirmation_subject,
    #                 confirmation_message,
    #                 confirmation_from_email,
    #                 confirmation_recipient_list
    #             )

    #         # Send a notification email to the recipient_email if provided
    #         if recipient_email:
    #             notification_subject = 'New Contact Us Submission'
    #             notification_message = f'A new contact form submission has been received from {serializer.data["first_name"]} {serializer.data["surname"]}.'
    #             notification_from_email = settings.EMAIL_HOST_USER
    #             notification_recipient_list = [recipient_email]

    #             send_mail(
    #                 notification_subject,
    #                 notification_message,
    #                 notification_from_email,
    #                 notification_recipient_list
    #             )

        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






    





