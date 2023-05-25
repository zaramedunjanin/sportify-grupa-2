from timestamps.models import models, Model

from user.models import User, Sport


class Venue(Model):
    venue_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    venue_picture = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    price_per_hour = models.DecimalField(max_digits=6, decimal_places=2)
    opening_time = models.TimeField()
    closing_time = models.TimeField()
    company = models.ForeignKey(User, on_delete=models.CASCADE)
    sport = models.ManyToManyField(Sport)

class Rating(Model):
    rating = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)


class Question(Model):
    text = models.TextField()
    answer = models.TextField(blank=True)
    pinned = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
