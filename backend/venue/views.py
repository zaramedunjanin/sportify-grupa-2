import json
from django.core import serializers
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import VenueSerializer
from .models import Venue

from .models import Venue
@api_view(['GET'])
def getVenue(request, venue_id):
    data = Venue.objects.filter(pk=venue_id)
    
    return HttpResponse(serializers.serialize("json", data))
    #venue = Venue.objects.get(pk=venue_id)
    #json_data = serializers.serialize('json', [venue])
    #return HttpResponse(json_data, content_type="text/json-comment-filtered")

# Create your views here.

@api_view(['GET'])
def getVenues(request):
    searchText = request.GET.get('searchText', '')
    min_price = request.GET.get('min_price', None)
    max_price = request.GET.get('max_price', None)
    location = request.GET.get('location', None)
    sport = request.GET.get('sport', None)
    sortBy = request.GET.get('sortBy', None)
    sortType = request.GET.get('sortType', None)

    queryset = Venue.objects_with_deleted.filter(venue_name__contains=searchText)
    
    if min_price:
      queryset = queryset.filter(price_per_hour__gte=min_price)
    if max_price:
      queryset = queryset.filter(price_per_hour__lte=max_price)
    if location:
      queryset = queryset.filter(city__eq=location)
    if sport:
      queryset = queryset.filter(sport__eq=sport)
    if sortBy and sortType: # sort by price desc/asc 
      if sortBy == "price_per_hour" and sortType == "asc":
        queryset = queryset.order_by("price_per_hour")
      if sortBy == "price_per_hour" and sortType == "desc":
        queryset = queryset.order_by("-price_per_hour")
      if sortBy == "searchText" and sortType == "asc":
        queryset = queryset.order_by("searchText")
      if sortBy == "searchText" and sortType == "desc":
        queryset = queryset.order_by("-searchText")
    
    serializer = VenueSerializer(queryset, many=True)
    return Response(serializer.data)