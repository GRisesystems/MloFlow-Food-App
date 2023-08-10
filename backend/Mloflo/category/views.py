from rest_framework import viewsets
from .serializers import CategorySerializer,ProductSerializer
from .models import Category    

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = ProductSerializer
    
