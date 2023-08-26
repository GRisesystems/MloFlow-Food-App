from django.urls import path
from . import views

urlpatterns = [
    path('', views.update_vendor_details, name='update_vendor_details'),
    path('profile', views.fetch_updated_user_profile, name='fetch_updated_user_profile'),
]
