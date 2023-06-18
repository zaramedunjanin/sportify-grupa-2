from django.db.models import Prefetch
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from django.db.models import Count, F, Value
from reservation.models import *
from reservation.serializers import *
from user.models import *
from user.serializers import *
from venue.models import *
from venue.serializers import *
from django.shortcuts import render
from .models import Reservation
from .serializers import ReservationSerializer
# Create your views here.

@api_view(['GET'])
def getUserReservations(request, user_id):
    reservations = Reservation.objects.filter(user = user_id).select_related('sport').order_by('start_time')
    serializer = ReservationSerializer(reservations, context={'request': request}, many=True)
    return Response(serializer.data)

