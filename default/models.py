from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class People(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    qq = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)