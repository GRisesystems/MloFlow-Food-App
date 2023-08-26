from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CategorySerializer
from .models import Category
from rest_framework import permissions

from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from . serializers import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer

# Test Endpoint


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def categories(request):
    context = {}
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    context['categories'] = serializer.data
    return Response(context, status=status.HTTP_200_OK)
