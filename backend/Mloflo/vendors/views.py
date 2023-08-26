from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from Category.models import Category
from .models import Vendor
from authapp.models import User
from authapp.serializers import UserCreateSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_vendor_details(request):
    try:
        data = request.data
        country = data.get('country')
        state = data.get('state')
        city = data.get('city')
        selected_options = data.get('selectedOptions')
        logged_in_user = request.user

        # Retrieve  the vendor's product categories
        product_categories = [Category.objects.get(
            id=category_id) for category_id in selected_options]

        # create vendor data
        vendor = Vendor.objects.create(
            vendor=logged_in_user,
            country=country,
            state=state,
            city=city,
        )
        # set product categories
        vendor.product_category.set(product_categories)
        try:
            logged_in_user.is_profile_complete = True
            logged_in_user.save()

        except User.DoesNotExist:
            pass
        context = {'message': 'Vendor details updated successfully'}
        return Response(context, status=status.HTTP_201_CREATED)

    except Exception as e:
        context = {'error': str(e)}
        print(e)
        return Response(context, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def fetch_updated_user_profile(request):
    context = {}
    user_id = request.user.id
    updated_user = User.objects.get(id=request.user.id)
    serializer = UserCreateSerializer(updated_user)    
    return Response(serializer.data,status = status.HTTP_200_OK)
