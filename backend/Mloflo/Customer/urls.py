from django.urls import path,include
from .views import CustomerListCreateView, CustomerRetrieveUpdateDestroyView
from rest_framework.routers import SimpleRouter
from .views import ChefBookingViewSet

router = SimpleRouter()
router.register(r'chef-bookings', ChefBookingViewSet)

urlpatterns = [
    path('', CustomerListCreateView.as_view(), name='customer-list'),
    path('<uuid:pk>/', CustomerRetrieveUpdateDestroyView.as_view(), name='customer-detail'),
    path('', include(router.urls)),
]
