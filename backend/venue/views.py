from django.db.models import Avg
from rest_framework.decorators import api_view
from rest_framework import serializers
from rest_framework.response import Response
import json
from django.core import serializers
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import VenueSerializer, QuestionSerializer
from .models import Venue, Question
from django.db.models import Prefetch
from django.db.models import BooleanField, Case, When

from reservation.models import Reservation
from user.models import Sport, User
from .models import Venue, Rating

def getVenueById(venue_id):
    venue = Venue.objects.get(pk=venue_id)
    return venue

def getUserByUsername(username):
    user = User.objects.get(username=username)
    return user

def getSportByName(sport_name):
    print("get sport by name: " + sport_name)
    sport = Sport.objects.get(sport_name=sport_name)
    return sport

#class VenueSerializer(serializers.ModelSerializer):
 #   sport = serializers.SlugRelatedField(many=True, read_only=True, slug_field='sport_name')
  #  class Meta:
   #     model = Venue
    #    fields = ('venue_name', 'address', 'description', 'opening_time', 'closing_time','price_per_hour', 'description', 'sport')
@api_view(['GET'])
def getVenue(request, venue_id):
    venue = Venue.objects.prefetch_related('sport').filter(pk = venue_id)
    serializer = VenueSerializer(venue, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def getVenueList(request):
    if request.method == 'GET':
        data = Venue.objects.all().order_by('id')

        serializer = VenueSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getRating(request, venue_id):
    average_rating = Rating.objects.filter(venue=venue_id).aggregate(avg_rating=Avg('rating'))
    data = average_rating['avg_rating']
    return Response(data)

@api_view(['GET'])
def getQuestions(request, venue_id):
    venue = getVenueById(venue_id=venue_id)
    data = Question.objects.filter(venue=venue).exclude(answer__exact='')

    data = data.order_by(Case(
        When(pinned=True, then=0),
        default=1,
        output_field=BooleanField()
    ))

    serializer = QuestionSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def postReservation(request, venue_id):
    if request.method == 'POST':
        sport_name = request.data.get('sport')
        start_date = request.data.get('start_date')
        end_date = request.data.get('end_date')
        total_places = request.data.get('total_places')
        going = request.data.get('going')
        desc = request.data.get('desc')
        username = request.data.get('username')

        venue = getVenueById(venue_id)
        user = getUserByUsername(username)
        sport = getSportByName(sport_name)

        print(sport_name, start_date, end_date, total_places, going, desc)

        reservation = Reservation(
            total_places=total_places, going=going,
            start_time=start_date, end_time=end_date,
            description=desc, number_of_invites=0,
            venue=venue, user=user, sport=sport
        )

        reservation.save()

        return Response({'message': 'Venue scheduled successfully'}, status=200)

    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def getVenues(request):
    searchText = request.GET.get('searchText', '')
    min_price = request.GET.get('min_price', None)
    max_price = request.GET.get('max_price', None)
    location = request.GET.get('location', None)
    sport = request.GET.get('sport', None)
    sortBy = request.GET.get('sortBy', None)
    sortType = request.GET.get('sortType', None)

    queryset = Venue.objects_with_deleted.prefetch_related('sport').filter(venue_name__contains=searchText)
    
    if min_price:
      queryset = queryset.filter(price_per_hour__gte=min_price)
    if max_price:
      queryset = queryset.filter(price_per_hour__lte=max_price)
    # if location:
    #   queryset = queryset.filter(city__=location)
    if sport:
      queryset = queryset.filter(sport__id__in=sport)

    if sortBy:
      if sortBy == "price_asc":
        queryset = queryset.order_by("price_per_hour")
      if sortBy == "price_desc":
        queryset = queryset.order_by("-price_per_hour")
      if sortBy == "alphabetical_asc":
        queryset = queryset.order_by("venue_name")
      if sortBy == "alphabetical_desc":
        queryset = queryset.order_by("-venue_name")
    
    serializer = VenueSerializer(queryset, many=True)
    return Response(serializer.data)
