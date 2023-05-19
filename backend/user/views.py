from django.core import serializers
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import User


# Create your views here.
def index(request):
    list_of_questions = Question.objects.all()
    question_string = ""

    for question in list_of_questions:
        question_string += " " + question.__str__()

    return HttpResponse(question_string)

