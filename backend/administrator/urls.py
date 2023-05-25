from django.urls import path
from . import views

urlpatterns = [
        path('tables/users/', views.getUserList),
        path('tables/users/delete/<int:id>/', views.userDetails),
        path('tables/sports/', views.getSportList),
        path('tables/sports/delete/<int:id>/', views.sportDetails),
        path('tables/venues/', views.getVenueList),
        path('tables/venues/delete/<int:id>/', views.venueDetails),
        path('tables/reservations/', views.getReservationList),
        path('tables/reservations/delete/<int:id>/', views.reservationDetails),
]
