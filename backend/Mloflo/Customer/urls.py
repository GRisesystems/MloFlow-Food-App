from django.urls import path
from .views import CustomerListCreateView, CustomerRetrieveUpdateDestroyView, ChefBookingListCreateView, ChefBookingDetailView

urlpatterns = [
    path('', CustomerListCreateView.as_view(), name='customer-list'),
    path('<uuid:pk>/', CustomerRetrieveUpdateDestroyView.as_view(), name='customer-detail'),
    path('chef-bookings/', ChefBookingListCreateView.as_view(), name='chef-booking-list'),
    path('chef-bookings/<uuid:pk>/', ChefBookingDetailView.as_view(), name='chef-booking-detail'),
]
