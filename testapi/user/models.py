from django.db import models

# Create your models here.
class User(models.Model):
    email=models.EmailField(max_length=200,unique=True)
    username=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    def __str__(self):
        return  self.email