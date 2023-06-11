from rest_framework import serializers
from .models import Reservation, AcceptedInvites



class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class AcceptedInvitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcceptedInvites
        fields = '__all__'