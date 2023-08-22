from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User
import uuid
from rest_framework.response import Response
import jwt

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

         # Add custom claims       
        token['user_id'] = str(user.id)

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == 200:
            access_token = response.data['access']
            payload = jwt.decode(access_token, options={"verify_signature": False})
            
            user_id_str = payload.get('user_id')
            user_id = uuid.UUID(user_id_str) # Convert the string back to a UUID
            
            # Query your user management system to get additional user data based on user_id
            user = User.objects.get(id=user_id)
            
            data = response.data
            data['first_name'] = user.first_name
            data['surname'] = user.surname
            data['first_time_login'] = user.if_first_time_login
            data['category'] = user.category
            
        return response

