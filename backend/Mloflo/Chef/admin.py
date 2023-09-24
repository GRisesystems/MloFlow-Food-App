from django.contrib import admin
from . models import Chef,Chef_certification,ChefCharge,Occasion

# Register your models here.
admin.site.register(Chef)
admin.site.register(Chef_certification)
admin.site.register(ChefCharge)
admin.site.register(Occasion)