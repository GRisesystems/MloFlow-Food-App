from .models import *
from django import forms
from django.contrib.auth.models import User
#from forms import ModelForm
class customerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'
        exclude = ["customer_id"]
       
        
        
class vendorForm(forms.ModelForm):
    class Meta:
        model = Vendor
        fields = '__all__'
        exclude = ["vendor_id"]
        
class chefForm(forms.ModelForm):
    class Meta:
        model = Chef
        fields = '__all__'
        exclude = ["chef_id"]

        
        
