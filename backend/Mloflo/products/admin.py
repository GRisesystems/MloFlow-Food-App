from django.contrib import admin
<<<<<<< HEAD
from .models import Product

admin.site.register(Product)
#admin.site.register(ProductImage)
=======
from .models import *

admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
>>>>>>> origin/ft_kamakia3
