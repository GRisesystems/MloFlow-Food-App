
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_vendor_details(request):
    context = {}
    context['message'] = 'success'
    return Response(context, status=status.HTTP_201_CREATED)
