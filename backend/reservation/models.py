from timestamps.models import models, Model

from user.models import User, Sport
from venue.models import Venue

# Create your models here.

class Reservation(Model):
    total_places = models.IntegerField()
    going = models.IntegerField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    description = models.CharField(max_length=255)
    approved = models.BooleanField(blank=True, null = True)
    auto_invite = models.BooleanField(default=False)
    number_of_invites = models.IntegerField(blank=True)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)


class AcceptedInvites(Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
