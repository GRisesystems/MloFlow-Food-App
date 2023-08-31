"""
URL configuration for Mloflo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView




urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
    path('main/', include('main.urls')),
    path('authapp/', include('authapp.urls')),    
    path('category/', include('Category.urls')),
    path('products/', include('products.urls')),
    path('api/schema/', SpectacularAPIView.as_view(), name="schema"),
    path('api/schema/docs/', SpectacularSwaggerView.as_view(url_name="schema")),
    path('auth/', include("djoser.urls")),
    path('auth/', include("djoser.urls.jwt")),

    # payments app routes
    path('api/v1/payments/', include("payments.urls")),
    path('api/v1/vendors/', include("vendors.urls")),
    path('api/v1/categories/', include("Category.urls")),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]