from rest_framework import viewsets
from .serializers import DeliveryAddressSerializer
from .models import DeliveryAddress
from rest_framework import permissions

class DeliveryAddressViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = DeliveryAddress.objects.all()
    serializer_class = DeliveryAddressSerializer
