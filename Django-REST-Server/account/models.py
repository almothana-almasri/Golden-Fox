from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    username=models.CharField(max_length=255,unique=True)
    email=models.EmailField(max_length=255,unique=True)
    
    
    # add additional fields in here

    def __str__(self):
        return self.username

