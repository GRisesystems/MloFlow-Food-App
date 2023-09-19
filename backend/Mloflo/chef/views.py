from rest_framework import viewsets
from authapp.models import User
from .models import Chef, Chef_certification, Review
from .serializers import ChefSerializer, ReviewSerializer

# test view imports
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, api_view, permission_classes


class ChefViewSet(viewsets.ModelViewSet):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


# chef update info test view

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_chef_info_test(request):
    user = User.objects.get(id=request.user.id)
    print(user)
    context = {}
    data = request.data
    profile_picture = request.FILES['profile_picture']
    country = data.get('country')
    state = data.get('state')
    speciality = data.get('speciality')
    chef = Chef.objects.create(chef=request.user, country=country, state=state,
                               speciality=speciality, profile_picture=profile_picture)

    certifications = []
    index = 0
    while f'certifications[{index}][description]' in data:
        description_key = f'certifications[{index}][description]'
        file_key = f'certifications[{index}][file]'

        if description_key in data and file_key in request.FILES:
            description = data[description_key]
            file = request.FILES[file_key]

            certification = {
                'description': description,
                'file': file,
            }

            certifications.append(certification)

        index += 1

    for item in certifications:        
        Chef_certification.objects.create(chef=chef, file=item.get(
            'file'), description=item.get('description'))

    # create chef

    context['message'] = 'success'
    return Response(context, status=status.HTTP_201_CREATED)


# from django.shortcuts import render
# from . models import *
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from . serializers import *

# from drf_spectacular.utils import extend_schema

# # Create your views here.
# @extend_schema(responses=ChefSerializer)
# @api_view(["POST"])
# def chefInfo(request):

#     if request.method =="POST":
#         serializer = ChefSerializer(data =request.data)
#         if serializer.is_valid():
#             serializer.save()

#     return Response(serializer.data)

# @extend_schema(responses=ChefSerializer)
# @api_view(["GET"])
# def getChef(request):

#     #permission_classes = [IsAuthenticated]
#     chef = Chef.objects.all()
#     serializer = ChefSerializer(chef, many = True)

#     return Response(serializer.data)
