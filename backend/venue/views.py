import json
from django.core import serializers
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import VenueSerializer
from .models import Venue, Rating
from django.db.models import Prefetch
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.db.models import Avg

from .models import Venue
@api_view(['GET'])
def getVenue(request, venue_id):
    data = Venue.objects.filter(pk=venue_id)
    
    return HttpResponse(serializers.serialize("json", data))
    #venue = Venue.objects.get(pk=venue_id)
    #json_data = serializers.serialize('json', [venue])
    #return HttpResponse(json_data, content_type="text/json-comment-filtered")

@api_view(['GET'])
def getVenues(request):
    # venues_with_ratings = Venue.objects.annotate(avg_rating=Avg('rating__rating')).prefetch_related('rating_set')
    # print(venues_with_ratings[0].avg_rating)
    # serializer = VenueSerializer(venues_with_ratings, many=True)
    # return Response(serializer.data)

    searchText = request.GET.get('searchText', '')
    min_price = request.GET.get('min_price', None)
    max_price = request.GET.get('max_price', None)
    location = request.GET.get('location', None)
    sport = request.GET.get('sport', None)
    sortBy = request.GET.get('sortBy', None)
    sortType = request.GET.get('sortType', None)

    queryset = Venue.objects_with_deleted.prefetch_related('sport').filter(venue_name__contains=searchText).filter(deleted_at__isnull = True)
    
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

# returns list of venues owned by a company
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCompanyVenues(request):
    company_id = request.user.id

    if company_id == None:
      return Response(status=status.HTTP_404_NOT_FOUND)
    print(company_id)
    queryset = Venue.objects_with_deleted.prefetch_related('sport').filter(company=company_id).filter(deleted_at__isnull = True)
    serializer = VenueSerializer(queryset, many=True)
    return Response(serializer.data)

# adds new venue
# TODO: dont forget to get company id from token and save it database
@api_view(['POST'])
def add_venue(request):
    if request.method == 'POST':
        serializer = VenueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# edits venue
@api_view(['PUT'])
def update_venue(request):
    try:
        pk = request.GET.get('id', None)
        venue = Venue.objects.get(pk=pk)
    except Venue.DoesNotExist:
        return Response({'message': 'Venue does not exist.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = VenueSerializer(venue, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# deletes venue
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_venue(request):
    print("Delete")
    try:
        venue_id = request.GET.get('id', None)
        print(venue_id)
        if venue_id == None:
          raise Venue.DoesNotExist
        venue = Venue.objects.get(pk=venue_id)
        print(venue.company_id)
        if(venue.company_id != request.user.id):
          raise Venue.DoesNotExist
        if request.method == 'DELETE':
          venue.delete()
          return Response({'message': 'Venue deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    except Venue.DoesNotExist:
        return Response({'message': 'Venue does not exist.'}, status=status.HTTP_404_NOT_FOUND)

    
