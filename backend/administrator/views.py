from django.db.models import Prefetch, Avg
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

@api_view(['GET'])
def getUserList(request):
    users = User.objects.prefetch_related('sport').filter(deleted_at__isnull = True).order_by('id')
    serializer = UserSerializer(users, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteUser(request, id):
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def putUser(request, id):
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(user, partial=True, data=request.data, context={'request': request})
    print(id)
    if serializer.is_valid():
        user.sport.clear()
        for sport_id in request.data["sport"]:
            user.sport.add(Sport.objects.get(id = sport_id))
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def getSportList(request):
    if request.method == 'GET':
        data = Sport.objects.all().order_by('id')

        serializer = SportSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def postSport(request):
    serializer = SportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def putSport(request, id):
    try:
        sport = Sport.objects.get(id=id)
    except Sport.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = SportSerializer(sport, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteSport(request, id):
    try:
        sport = Sport.objects.get(id=id)
    except Sport.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    sport.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def getVenueList(request):
    if request.method == 'GET':
        data = Venue.objects.all().order_by('id')

        serializer = VenueSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def getTop3VenueList(request):
    if request.method == 'GET':
        data = Venue.objects.annotate(avg_rating=Avg('rating__rating')).order_by('-avg_rating')[:3]

        serializer = VenueSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteVenue(request, id):
    try:
        venue = Venue.objects.get(id=id)
    except Venue.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    venue.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['PUT'])
def putVenue(request, id):
    try:
        venue = Venue.objects.get(id=id)
    except Venue.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = VenueSerializer(venue, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def postVenue(request):
    serializer = VenueSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def getReservationsList(request):
    if request.method == 'GET':
        data = Reservation.objects.all().order_by('id')

        serializer = ReservationSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def putReservation(request, id):
    try:
        reservation = Reservation.objects.get(id=id)
    except Reservation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ReservationSerializer(reservation, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteReservation(request, id):
    try:
        reservation = Reservation.objects.get(id=id)
    except Reservation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    reservation.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def postReservation(request):
    serializer = ReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def getAcceptedInvitesList(request):
    if request.method == 'GET':
        data = AcceptedInvites.objects.all().order_by('id')

        serializer = AcceptedInvitesSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def putInvite(request, id):
    try:
        accepted = AcceptedInvites.objects.get(id=id)
    except AcceptedInvites.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = AcceptedInvitesSerializer(accepted, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteInvite(request, id):
    try:
        accepted = AcceptedInvites.objects.get(id=id)
    except AcceptedInvites.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    accepted.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['POST'])
def postInvite(request):
    serializer = AcceptedInvitesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def getQuestionsList(request):
    if request.method == 'GET':
        data = Question.objects.all().order_by('id')

        serializer = QuestionSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def putQuestion(request, id):
    try:
        question = Question.objects.get(id=id)
    except Question.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = QuestionSerializer(question, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteQuestion(request, id):
    try:
        question = Question.objects.get(id=id)
    except Question.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    question.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def postQuestion(request):
    serializer = QuestionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def getRatingsList(request):
    if request.method == 'GET':
        data = Rating.objects.all().order_by('id')

        serializer = RatingSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def putRating(request, id):
    try:
        rating = Rating.objects.get(id=id)
    except Rating.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RatingSerializer(rating, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteRating(request, id):
    try:
        rating = Rating.objects.get(id=id)
    except Rating.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    rating.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def postRating(request):
    serializer = RatingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def getCompanyList(request):
    if request.method == 'GET':
        data = User.objects.filter(role=2, verified = "", deleted_at__isnull = True).all().order_by('id')

        serializer = UserSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def putCompany(request, id):
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializer(user, partial=True, data=request.data, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteCompany(request, id):
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

