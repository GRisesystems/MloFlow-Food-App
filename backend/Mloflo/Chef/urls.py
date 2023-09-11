from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChefViewSet, ReviewViewSet, update_chef_info_test

router = DefaultRouter()
router.register(r'', ChefViewSet)

review_router = DefaultRouter()
review_router.register(r'', ReviewViewSet, basename='review')

urlpatterns = [
    path('chefs/', include(router.urls)),
    path('chefs/test', update_chef_info_test, name='update_chef_info_test'),
    path('reviews/', include(review_router.urls)),
]
