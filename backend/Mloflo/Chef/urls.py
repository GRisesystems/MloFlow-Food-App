from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChefViewSet, ReviewViewSet, ChefChargeViewSet,OccasionViewSet, update_chef_info_test

router = DefaultRouter()
router.register(r'', ChefViewSet)

review_router = DefaultRouter()
review_router.register(r'', ReviewViewSet, basename='review')

chefCharge_router = DefaultRouter()
chefCharge_router.register(r'',ChefChargeViewSet, basename='chefcharges')

occasions_router = DefaultRouter()
occasions_router.register(r'', OccasionViewSet, basename= 'occasion')

urlpatterns = [
    path('chefs/', include(router.urls)),
    path('chefs/test', update_chef_info_test, name='update_chef_info_test'),
    path('reviews/', include(review_router.urls)),
    path('chef-charges/', include(chefCharge_router.urls)),
    path('occasions/', include(occasions_router.urls)),
]