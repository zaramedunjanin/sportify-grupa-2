from rest_framework import serializers
from .models import Reservation, AcceptedInvites

class ReservationSerializer(serializers.ModelSerializer):
    sport = serializers.SlugRelatedField(read_only=True, slug_field='sport_name')
    venue = serializers.SlugRelatedField(read_only=True, slug_field='venue_name')

    class Meta:
        model = Reservation
        fields = '__all__'

class AcceptedInvitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcceptedInvites
        fields = '__all__'