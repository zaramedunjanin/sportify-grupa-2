from django.core import serializers
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import User


