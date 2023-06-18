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
    company_name = models.CharField(max_length=100, null = True, unique = True, blank=True)
    email = models.EmailField(max_length=50, null=True, unique=True)
    phone_number = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
<<<<<<< HEAD
    profile_picture = models.CharField(max_length=255, blank=True, default = "https://firebasestorage.googleapis.com/v0/b/sportify-4db02.appspot.com/o/files%2Fdefault_profile_picture.jpg?alt=media&token=146819b8-b4ca-40b3-a308-1db7b0d4306e")
=======
    profile_picture = models.CharField(max_length=255, blank=True, default = "https://firebasestorage.googleapis.com/v0/b/sportify-4db02.appspot.com/o/files%2Fsportify_default_profile_picture_00.jpg?alt=media&token=1a89aaee-2ca4-4583-9970-b8abfd18ce07")
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
    gender = models.CharField(max_length=50, blank=True, default = "Other")
    city = models.CharField(max_length=50)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, null=True, default=2)
    blocked = models.BooleanField(default=False, blank=True)
    verified = models.BooleanField(null=True, blank=True)
    sport = models.ManyToManyField(Sport, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


