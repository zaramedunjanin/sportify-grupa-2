from django.urls import path
from . import views

urlpatterns = [
    path('all', views.getVenues, name='venues'),
    path('company', views.getCompanyVenues, name='company'),
    path('company/update', views.update_venue, name='update'),
    path('company/add', views.getCompanyVenues, name='add'),
    path('company/delete', views.getCompanyVenues, name='delete'),
]
