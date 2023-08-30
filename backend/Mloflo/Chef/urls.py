from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChefViewSet

router = DefaultRouter()
router.register(r'', ChefViewSet)

urlpatterns = [
    path('', include(router.urls)),
]