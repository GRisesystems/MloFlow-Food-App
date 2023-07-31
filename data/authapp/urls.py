from authapp import views
from django.urls import path,include

urlpatterns = [
    
    path('signup/',views.signup, name='signup'),
    path('login/',views.handleLogin, name='handleLogin'),
    path('logout/',views.handleLogout, name='handleLogout'),
]