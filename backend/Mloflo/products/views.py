from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product,ProductImage
from rest_framework import permissions

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        user = self.request.user  # Assuming the user is authenticated
        product = serializer.save(created_by=user)
        # Handle images and associate them with the product
        images = self.request.FILES.getlist('images')
        for image in images:
            ProductImage.objects.create(product=product, image=image)
