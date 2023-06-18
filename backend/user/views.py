import json
from django.core import serializers
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import SignupSerializer

# Create your views here.
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def getUserFromDatabase(request):
    user = User.objects.prefetch_related('sport').filter(pk=request.user.id)
    serializer = UserSerializer(users, context={'request': request}, many=True)
    return Response(serializer.data)


# Create your views here.
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def getUnpackedToken(request):
    user = request.user
    sports = user.sport.all()
    sport = ""
    sport_id = ""
    for s in sports:
        sport += s.sport_name+', '
        sport_id += str(s.id) + ', '
    sport = sport[:len(sport)-2]
    sport_id = sport_id[:len(sport_id) - 2]
    data = {'id': user.id, 'username': user.username, 'email': user.email, 'role': user.role, 'first_name': user.first_name, 'last_name': user.last_name, 'city': user.city,'phone_number': user.phone_number,'gender': user.gender,'profile_picture': user.profile_picture, 'sport': sport, 'sport_id': sport_id}
    return Response(data)

@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    print(serializer.is_valid())
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
