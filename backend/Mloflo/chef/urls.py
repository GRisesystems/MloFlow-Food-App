from django.urls import path
from .views import ChefListCreateView, ChefRetrieveUpdateDestroyView

urlpatterns = [
    path('chefs/', ChefListCreateView.as_view(), name='chef-list-create'),
    path('chefs/<int:pk>/', ChefRetrieveUpdateDestroyView.as_view(), name='chef-detail'),
]
