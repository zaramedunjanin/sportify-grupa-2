from django.db import models
from authapp.models import User, Sport
from venueapp.models import Venue

# Create your models here.

class Reservation(models.Model):
    total_places = models.IntegerField()
    going = models.IntegerField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    description = models.CharField(max_length=255)
    approved = models.BooleanField(default=False)
    auto_invite = models.BooleanField(default=False)
    number_of_invites = models.IntegerField()
    venue_id = models.ForeignKey(Venue, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    sport_id = models.ForeignKey(Sport, on_delete=models.CASCADE)


class AcceptedInvites(models.Model):
    reservation_id = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
