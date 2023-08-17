from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product
from rest_framework import permissions

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer