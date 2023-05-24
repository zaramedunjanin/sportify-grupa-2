from django.contrib.auth.models import AbstractUser
from timestamps.models import models, Model


# Create your models here.

class Sport(Model):
    sport_name = models.CharField(max_length=50, unique=True)


def __str__(self):
    return f"{self.sport_name}"


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
    email = models.EmailField(max_length=50, null=True, unique=True)
    phone_number = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    profile_picture = models.CharField(max_length=255, blank=True)
    gender = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True, default=2)
    blocked = models.BooleanField(default=False, blank=True)
    verified = models.BooleanField(null=True, blank=True)
    sport = models.ManyToManyField(Sport, blank=True)


def __str__(self):
    return f"{self.first_name} {self.last_name}"
