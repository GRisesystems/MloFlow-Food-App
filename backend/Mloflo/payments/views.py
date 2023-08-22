import random
import requests
import datetime
from django.conf import settings
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from .utils import generate_mpesa_base_64_key


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
            "BusinessShortCode": '174379', 
            "Password": settings.MPESA_PASS_KEY,  
            "Timestamp": timestamp,  
            "TransactionType": "CustomerPayBillOnline",  
            "Amount": '1',  
            "PartyA": '254795510186', 
            "PartyB": '174379',  
            "PhoneNumber": '254795510186',  
            "CallBackURL": "https://github.com/kamula", 
            "AccountReference": str(random.randint(1000000, 9999999)),  
            "TransactionDesc": "Payment for dairy products",
        }

        response = requests.post(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', json=payload, headers=headers
        )

        context['message'] = response.text
        return Response(context, status=status.HTTP_200_OK)

    context['message'] = 'fail'
    context['access_token'] = access_token
    return Response(context, status=status.HTTP_400_BAD_REQUEST)
