from rest_framework import routers
from . import views
from django.urls import path,include

router = routers.DefaultRouter()
router.register(r'', views.CategoryViewSet)
router.register(r'products', views.ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
]