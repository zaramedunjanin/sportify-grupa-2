from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("<int:venue_id>", views.getVenue, name="venue"),
    path("<int:venue_id>/getrating", views.getRating, name="rating")
]