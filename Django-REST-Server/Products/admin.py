from django.contrib import admin
from .models import Product,Comment,Category,Favourite_product

# Register your models here.
admin.site.register(Product)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Favourite_product)
