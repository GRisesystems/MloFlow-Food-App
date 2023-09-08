from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactUsViewSet

router = DefaultRouter()
router.register(r'contact-us', ContactUsViewSet)

urlpatterns = [
    # Your other URL patterns
    path('', include(router.urls)),
]
