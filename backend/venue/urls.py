from django.urls import path
from . import views

urlpatterns = [
    path('all', views.getVenues, name='venues'),
    path('company', views.getCompanyVenues, name='company'),
]
