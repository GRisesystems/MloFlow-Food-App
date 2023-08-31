from django.urls import path
from .views import ChefListCreateView, ChefRetrieveUpdateDestroyView,ReviewListCreateView,ReviewRetrieveUpdateDestroyView

urlpatterns = [
    path('chefs/', ChefListCreateView.as_view(), name='chef-list-create'),
    path('chefs/<int:pk>/', ChefRetrieveUpdateDestroyView.as_view(), name='chef-detail'),
    path('reviews/', ReviewListCreateView.as_view(), name='review-list-create'),
    path('reviews/<int:pk>/', ReviewRetrieveUpdateDestroyView.as_view(), name='review-detail'),
]

