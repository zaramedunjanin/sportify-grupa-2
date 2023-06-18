from django.shortcuts import render
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