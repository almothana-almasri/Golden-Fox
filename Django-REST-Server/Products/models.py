from account.models import CustomUser 
from django.db import models
from django.urls import reverse
from django.utils import timezone



class Category(models.Model):
    owner = models.ForeignKey(CustomUser(),on_delete=models.CASCADE, null=True, blank=True)
    category_type = models.CharField(max_length=256)

    def __str__(self):
        return self.category_type


class Product(models.Model):
    owner = models.ForeignKey(CustomUser(), on_delete=models.CASCADE, null=True, blank=True)
    owner_name = models.CharField(max_length=255,default="Unknown")
    Title = models.CharField(max_length=256)
    image= models.ImageField(upload_to='uploads/', blank=True,null=True)
    description = models.TextField(default="", null=True, blank=True)
    price = models.IntegerField()
    contact_info = models.CharField(max_length=256)
    category = models.ForeignKey(Category,on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    

    
    def __str__(self):
        return self.Title

    def get_absolute_url(self):
        return reverse('Product_detail', args=[str(self.id)])
    

class Comment(models.Model):
    owner = models.ForeignKey(CustomUser(),on_delete=models.CASCADE, null=True, blank=True)
    owner_name = models.CharField(max_length=255,default="Unknown")
    Product = models.ForeignKey(Product,on_delete=models.CASCADE, null=True, blank=True)
    email = models.EmailField(max_length=255)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def time_since_creation(self):
        now = timezone.now()
        duration = now - self.created_at
        # You can format the duration as per your requirements
        days, seconds = duration.days, duration.seconds
        hours = days * 24 + seconds // 3600
        minutes = (seconds % 3600) // 60
        return f"{days} days, {hours} hours, {minutes} minutes"

    def __str__(self):
        return self.body
    

class Favourite_product(models.Model):
    owner = models.ForeignKey(CustomUser(),on_delete=models.CASCADE, null=True, blank=True)
    owner_name = models.CharField(max_length=255,default="Unknown")
    Product = models.ForeignKey(Product,on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        unique_together = ('owner', 'Product')
    
    def __str__(self):
        return self.Product.Title






    
