from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CategorySerializer
from .models import Category 
from rest_framework import permissions

class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer

