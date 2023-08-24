#from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
#from rest_framework_simplejwt.views import TokenObtainPairView
#from .models import User
#import uuid
from rest_framework.response import Response
#import jwt


from .tokens import create_jwt_pair_for_user
from rest_framework.views import APIView
from rest_framework.request import Request
from django.contrib.auth import authenticate
from rest_framework import generics, status




#class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   # @classmethod
    #def get_token(cls, user):
       # token = super().get_token(user)

         # Add custom claims       
        #token['user_id'] = str(user.id)

        #return token

#class MyTokenObtainPairView(TokenObtainPairView):
   # serializer_class = MyTokenObtainPairSerializer

   # def post(self, request, *args, **kwargs):
       # response = super().post(request, *args, **kwargs)
        
        #if response.status_code == 200:
           # access_token = response.data['access']
            #payload = jwt.decode(access_token, options={"verify_signature": False})
            
            #user_id_str = payload.get('user_id')
            #user_id = uuid.UUID(user_id_str) # Convert the string back to a UUID
            
            # Query your user management system to get additional user data based on user_id
            #user = User.objects.get(id=user_id)
            
            #data = response.data
           # data['first_name'] = user.first_name
            #data['surname'] = user.surname
            #data['first_time_login'] = user.if_first_time_login
            #data['category'] = user.category
            
        #return response


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
            category = user.category

            response = {"tokens": tokens, "email":email, "firstname":first_name, "surname":surname, "category":category, "if_first_time_login":if_first_time_login}
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid email or password"})
        
    def get(self, request: Request):
        content = {"user": str(request.user), "auth": str(request.auth)}

        return Response(data=content, status=status.HTTP_200_OK)