from django.db import models
from authapp.models import User, Sport


class Venue(models.Model):
    venue_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.BooleanField(default=False)
    type = models.CharField(max_length=50)
    description = models.TextField()
    price_per_hour = models.DecimalField(max_digits=6, decimal_places=2)
    opening_time = models.TimeField()
    closing_time = models.TimeField()
    company_id = models.ForeignKey(User, on_delete=models.CASCADE)
    sport_id = models.ManyToManyField(Sport)

class Rating(models.Model):
    rating = models.IntegerField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    venue_id = models.ForeignKey(Venue, on_delete=models.CASCADE)


class Question(models.Model):
    text = models.TextField()
    answer = models.TextField()
    pinned = models.BooleanField(default=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    venue_id = models.ForeignKey(Venue, on_delete=models.CASCADE)
