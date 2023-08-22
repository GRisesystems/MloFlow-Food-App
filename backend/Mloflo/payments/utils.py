import requests
import base64
import json
import hashlib
import datetime
from django.conf import settings


def generate_mpesa_base_64_key():
    try:
        consumer_key = settings.MPESA_CONSUMER_KEY
        consumer_secret = settings.MPESA_CONSUMER_SECRET
        credentials = f"{consumer_key}:{consumer_secret}"
        encoded_credentials = base64.b64encode(credentials.encode()).decode()
        response = requests.request("GET", 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
                                    headers={'Authorization': f'Basic {encoded_credentials}'})

        response_dictionary = response.json()
        if response.status_code == 200:
            mpesa_access_token = response_dictionary.get('access_token')
            return mpesa_access_token
        else:
            # Handle possible response errors
            # print("Error:", response_dictionary)
            return None

    except Exception as e:
        # Handle exceptions
        # print("An error occurred:", e)
        return None



def generate_lipa_na_mpesa_passkey(timestamp):
    shortcode = "174379"
    passkey = settings.MPESA_PASS_KEY
    concatenated = f"{shortcode}{passkey}{timestamp}"
    passkey_encoded = base64.b64encode(concatenated.encode()).decode()
    return passkey_encoded

    

    