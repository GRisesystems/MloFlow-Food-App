#from django.contrib.auth.forms import UserCreationForm
from django import forms
#from forms import ModelForm
from .models import *
#from django.contrib.auth.models import User



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

        
        
