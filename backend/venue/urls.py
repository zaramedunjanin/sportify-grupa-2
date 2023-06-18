from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("<int:venue_id>", views.getVenue, name="venue"),
    path("<int:venue_id>/getrating", views.getRating, name="rating"),
    path("<int:venue_id>/getquestions", views.getQuestions, name="reservation"),
    path("<int:venue_id>/schedule", views.postReservation, name="reservation"),
    path('all', views.getVenues, name='venues'),
    path('user/<int:user_id>/rating/', views.getUserRating, name='userRating'),

    path('company', views.getCompanyVenues, name='company'),
    path('company/update', views.update_venue, name='update'),
    path('company/add', views.getCompanyVenues, name='add'),
    path('company/delete', views.delete_venue, name='delete'),
]
