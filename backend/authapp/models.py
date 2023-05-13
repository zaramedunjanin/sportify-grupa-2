from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(('Users must have an email address'))
        print(extra_fields)
        email = self.normalize_email(email)
        print("user")
        print(self.model)
        user = self.model(email=email, **extra_fields)
        print("set_password")
        user.set_password(password)
        user.save()
        return user


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50)

    objects = CustomUserManager()
