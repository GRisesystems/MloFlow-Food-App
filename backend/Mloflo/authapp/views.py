# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
# from .models import User
# import uuid
from rest_framework.response import Response
# import jwt


from .tokens import create_jwt_pair_for_user
from rest_framework.views import APIView
from rest_framework.request import Request
from django.contrib.auth import authenticate,get_user_model
from rest_framework import generics, status
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.contrib import messages
from django.shortcuts import redirect


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
# @classmethod
# def get_token(cls, user):
# token = super().get_token(user)

# Add custom claims
# token['user_id'] = str(user.id)

# return token

# class MyTokenObtainPairView(TokenObtainPairView):
# serializer_class = MyTokenObtainPairSerializer

# def post(self, request, *args, **kwargs):
# response = super().post(request, *args, **kwargs)

# if response.status_code == 200:
# access_token = response.data['access']
# payload = jwt.decode(access_token, options={"verify_signature": False})

# user_id_str = payload.get('user_id')
# user_id = uuid.UUID(user_id_str) # Convert the string back to a UUID

# Query your user management system to get additional user data based on user_id
# user = User.objects.get(id=user_id)

# data = response.data
# data['first_name'] = user.first_name
# data['surname'] = user.surname
# data['first_time_login'] = user.if_first_time_login
# data['category'] = user.category

# return response


class LoginView(APIView):
    permission_classes = []

    def post(self, request: Request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if user is not None:
            if user.last_login is not None:
                user.if_first_time_login = False
                user.save()

            tokens = create_jwt_pair_for_user(user)
            email = user.email
            first_name = user.first_name
            surname = user.surname
            if_first_time_login = user.if_first_time_login
            is_profile_complete = user.is_profile_complete
            category = user.category

            response = {"tokens": tokens, "email": email, "first_name": first_name, "surname": surname,
                        "category": category, "first_time_login": if_first_time_login, 'is_profile_complete': is_profile_complete}
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid email or password"})

    def get(self, request: Request):
        content = {"user": str(request.user), "auth": str(request.auth)}

        return Response(data=content, status=status.HTTP_200_OK)


def activate_account(request, uidb64, token):
    # Account Activation link
    User = get_user_model()
    try:
        # Decode the user ID from the URL
        uid = force_str(urlsafe_base64_decode(uidb64))

        # Get the user associated with the ID
        user = User.objects.get(pk=uid)

        # Verify the token
        if default_token_generator.check_token(user, token):
            # Activate the user's account
            user.is_active = True
            user.save()

            # Redirect to success or login page
            messages.success(
                request, 'Account Activated successfully. You can now login', extra_tags='success')
            return redirect('redirect_home_view')
        else:
            # Invalid token, show an error page or redirect to an error page
            messages.error(request, 'Invalid token', extra_tags='danger')
            return redirect('redirect_home_view')
    except (User.DoesNotExist, ValueError, TypeError):
        # User not found or invalid URL, show an error page or redirect to an error page
        messages.error(request, 'Account does not exist', extra_tags='danger')
        return redirect('redirect_home_view')
