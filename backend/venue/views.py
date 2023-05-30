import json
from django.core import serializers
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import VenueSerializer
from .models import Venue
from django.db.models import Prefetch

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