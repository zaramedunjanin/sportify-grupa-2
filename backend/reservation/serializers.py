from rest_framework import serializers
from .models import Reservation, AcceptedInvites
from user.serializers import UserSerializer, SportSerializer
from venue.serializers import VenueSerializer

class ReservationSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    venue = VenueSerializer()
    sport = SportSerializer()
    class Meta:
        model = Reservation
        fields = '__all__'

class AcceptedInvitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcceptedInvites
        fields = '__all__'