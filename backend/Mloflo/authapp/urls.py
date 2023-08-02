from django.contrib.auth import views as auth_views
from django.urls import path
from .import views
from .forms import LoginForm

app_name = 'authapp'

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(template_name='authapp/login.html', authentication_form=LoginForm), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='authapp/login.html'), name='logout'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
]