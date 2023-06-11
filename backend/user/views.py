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
@api_view(['GET'])

def getUser(request):
    user = request.user
    data = [{'user': "Ena"}]
    # users = User.objects.all()
    # data = [{'username': user.username, 'email': user.email} for user in users]
    return Response(data)


@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    print(serializer.is_valid())
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
