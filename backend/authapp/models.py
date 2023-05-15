from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Sport(models.Model):
    sport_name = models.CharField(max_length=50, unique=True)

class User(AbstractUser):
    ADMIN = 1
    USER = 2
    COMPANY = 3

    ROLE_CHOICES = (
        (ADMIN, 'Admin'),
        (USER, 'USer'),
        (COMPANY, 'Company'),
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    company_name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=50, null=True, blank=True, unique=True)
    phone_number = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True)
    blocked = models.BooleanField(default=False)
    verified = models.BooleanField(null=True)
    sport_id = models.ManyToManyField(Sport)

