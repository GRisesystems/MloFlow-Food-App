from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
import jwt

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims       
        token['first_name'] = user.first_name
        token['surname'] = user.surname
        token['first_time_login'] = user.if_first_time_login
        token['category'] = user.category
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == 200:
            access_token = response.data['access']
            payload = jwt.decode(access_token, options={"verify_signature": False})  # Decode the access token payload
            
            data = response.data
            data['first_name'] = payload.get('first_name')
            data['surname'] = payload.get('surname')
            data['first_time_login'] = payload.get('first_time_login')
            data['category'] = payload.get('category')
            
        return response
    def _get_payload(self, token):
        from rest_framework_simplejwt.tokens import RefreshToken
        refresh_token = RefreshToken(token)
        return refresh_token.payload