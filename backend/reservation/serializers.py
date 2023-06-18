from rest_framework import serializers
from .models import Reservation, AcceptedInvites
from user.serializers import UserSerializer, SportSerializer
from venue.serializers import VenueSerializer


class ReservationSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
    sport = serializers.SlugRelatedField(read_only=True, slug_field='sport_name')
    venue = serializers.SlugRelatedField(read_only=True, slug_field='venue_name')

=======
    user = UserSerializer()
    venue = VenueSerializer()
    sport = SportSerializer()
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
    class Meta:
        model = Reservation
        fields = '__all__'

class AcceptedInvitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcceptedInvites
        fields = '__all__'