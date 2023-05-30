from django.db.models import Avg
from rest_framework.decorators import api_view
from rest_framework import serializers
from rest_framework.response import Response

from user.models import Sport
from .models import Venue, Rating


class VenueSerializer(serializers.ModelSerializer):
    sport = serializers.SlugRelatedField(many=True, read_only=True, slug_field='sport_name')
    class Meta:
        model = Venue
        fields = ('venue_name', 'address','description', 'opening_time', 'closing_time','price_per_hour', 'description', 'sport')
@api_view(['GET'])
def getVenue(request, venue_id):
    # venues = Venue.objects.filter(pk=venue_id)
    # sports = Sport.objects.filter(venue__pk=venue_id)
    #
    # lista = list(chain(venues,sports))
    #
    # for venue in venues:
    #     for sport in venue.sport.all():
    #         print(sport.sport_name)
    #
    # data = serializers.serialize('json', lista)
    #
    # return HttpResponse(data)

    venue = Venue.objects.prefetch_related('sport').filter(pk = venue_id)
    serializer = VenueSerializer(venue, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRating(request, venue_id):
    average_rating = Rating.objects.filter(venue=venue_id).aggregate(avg_rating=Avg('rating'))
    data = average_rating['avg_rating']
    return Response(data)
