import random
import requests
import datetime
import logging
from django.conf import settings
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

from django.views.decorators.csrf import csrf_exempt
from .utils import generate_mpesa_base_64_key,generate_lipa_na_mpesa_passkey




@api_view(['POST'])
def initiate_stk_push(request):
    context = {}
    phone_number = request.data.get("phone_number")
    amount = request.data.get("amount")
    access_token = generate_mpesa_base_64_key()

    if access_token:
        timestamp = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        

        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {access_token}'
        }

        
        payload = {    
            "BusinessShortCode": "174379",    
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
            "Timestamp":"20160216165627",    
            "TransactionType": "CustomerPayBillOnline",    
            "Amount": amount,    
            "PartyA":"254795510186",    
            "PartyB":"174379",    
            "PhoneNumber":phone_number,    
            "CallBackURL": "https://mydomain.com/pat",    
            "AccountReference":"Mlo Flow",    
            "TransactionDesc":"Test"
        }

        try:
            response = requests.post(
                'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', json=payload, headers=headers
            )
            context['message'] = response.text
            return Response(context, status=status.HTTP_200_OK)

        except Exception as e:
            # Log the error along with the payload
            logging.error(f"Error occurred: {str(e)}")
            logging.error(f"Payload causing error: {payload}")

            context['message'] = 'An error occurred'
            return Response(context, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    context['message'] = 'fail'
    return Response(context, status=status.HTTP_400_BAD_REQUEST)




@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([BasicAuthentication, SessionAuthentication])
def mpesa_callback(request):
    if request.method == "POST":
        # Process the callback data here
        data = request.POST  # You might want to parse this data based on M-Pesa's callback format
        # Update your database or perform other actions based on the data
        print(data)
        
        # Return a response to acknowledge receipt of the callback
        response_data = {"status": "success"}
        return Response(response_data, status=status.HTTP_200_OK)

    return JsonResponse({"error": "Invalid request method"}, status=400)
