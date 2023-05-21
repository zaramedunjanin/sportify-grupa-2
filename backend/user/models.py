from django.contrib.auth.models import AbstractUser
from timestamps.models import models, Model
# Create your models here.

class Sport(Model):
    sport_name = models.CharField(max_length=50, unique=True)

class User(AbstractUser, Model):
    ADMIN = 1
    USER = 2
    COMPANY = 3

    ROLE_CHOICES = (
        (ADMIN, 'Admin'),
        (USER, 'User'),
        (COMPANY, 'Company'),
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
    company_name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=50, null=True, blank=True, unique=True)
    phone_number = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    profile_picture = models.CharField(max_length=255)
    gender = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True, default=USER)
    blocked = models.BooleanField(default=False)
    verified = models.BooleanField(null=True)
    sport = models.ManyToManyField(Sport)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []