from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DeliveryAddressViewSet

router = DefaultRouter()
router.register(r'delivery_addresses', DeliveryAddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
]