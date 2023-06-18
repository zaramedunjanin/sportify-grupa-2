<<<<<<< HEAD
from django.urls import path
from . import views

urlpatterns = [
        path('<int:user_id>/', views.getUserReservations),

]

=======

from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('<int:user_id>/', views.getUserReservations),

    path('all', views.getAllCompanyBookings, name='venues'),
    path('venue', views.getBookingsByVenueId, name='update'),
    path('accept', views.acceptBooking, name='update'),
    path('reject', views.rejectBooking, name='add'),
]
>>>>>>> 2268fe628d84b9689fc5dd0473b405214ab472ba
