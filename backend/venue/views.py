from django.db.models import Avg
from rest_framework.decorators import api_view
from rest_framework import serializers
from rest_framework.response import Response

from reservation.models import Reservation
from user.models import Sport, User
from .models import Venue, Rating

def getVenueById(venue_id):
    venue = Venue.objects.get(pk=venue_id)
    return venue

def getUserById(user_id):
    user = User.objects.get(pk=user_id)
    return user

def getSportByName(sport_name):
    print("get sport by name: " + sport_name)
    sport = Sport.objects.get(sport_name=sport_name)
    return sport

class VenueSerializer(serializers.ModelSerializer):
    sport = serializers.SlugRelatedField(many=True, read_only=True, slug_field='sport_name')
    class Meta:
        model = Venue
        fields = ('venue_name', 'address', 'description', 'opening_time', 'closing_time','price_per_hour', 'description', 'sport')
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

@api_view(['POST'])
def postReservation(request, venue_id):
    if request.method == 'POST':
        sport_name = request.data.get('sport')
        start_date = request.data.get('start_date')
        end_date = request.data.get('end_date')
        total_places = request.data.get('total_places')
        going = request.data.get('going')
        desc = request.data.get('desc')

        venue = getVenueById(venue_id)
        user = getUserById(32)
        sport = getSportByName(sport_name)

        print(sport_name, start_date, end_date, total_places, going, desc)

        reservation = Reservation(
            total_places=total_places, going=going,
            start_time=start_date, end_time=end_date,
            description=desc, number_of_invites=0,
            venue=venue, user=user, sport=sport
        )

        reservation.save()

        return Response({'message': 'Venue scheduled successfully'})

    return Response({'error': 'Invalid request method'}, status=400)




