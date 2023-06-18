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
<<<<<<< HEAD
# Create your views here.

@api_view(['GET'])
def getUserReservations(request, user_id):
    reservations = Reservation.objects.filter(user = user_id).select_related('sport')
    serializer = ReservationSerializer(reservations, context={'request': request}, many=True)
    return Response(serializer.data)

=======
import json
from django.core import serializers
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import ReservationSerializer
from .models import Reservation
from django.db.models import Prefetch
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllCompanyBookings(request):
   # queryset = Reservation.objects.select_related('user')
    reservations = Reservation.objects.select_related('venue', 'user', 'sport').filter(approved__isnull=True, venue__company=request.user.id)
    serializer = ReservationSerializer(reservations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUserReservations(request, user_id):
    reservations = Reservation.objects.filter(user = user_id).select_related('sport').order_by('start_time')
    serializer = ReservationSerializer(reservations, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getBookingsByVenueId(request):
   venue_id = request.GET.get('venue_id', None)

   reservations = Reservation.objects.select_related('venue', 'user', 'sport').filter(approved=True, venue__company=request.user.id)
   serializer = ReservationSerializer(reservations, many=True)
   
   return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def acceptBooking(request):
   reservation_id = request.data.get('reservation_id', None)

   try:
      reservation = Reservation.objects.get(id=reservation_id)
   except Reservation.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
  
   reservation.approved = True
   reservation.save()
   return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def rejectBooking(request):
   reservation_id = request.data.get('reservation_id', None)

   try:
      reservation = Reservation.objects.get(id=reservation_id)
   except Reservation.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
   
   reservation.approved = False
   reservation.save()
   return Response(status=status.HTTP_204_NO_CONTENT)
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
