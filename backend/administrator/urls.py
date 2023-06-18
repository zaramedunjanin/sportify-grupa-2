from django.urls import path
from . import views

urlpatterns = [
        path('tables/users/', views.getUserList),
        path('tables/users/delete/<int:id>/', views.deleteUser),
        path('tables/users/edit/<int:id>/', views.putUser),
        path('tables/users/add/', views.postUser),

        path('tables/sports/', views.getSportList),
        path('tables/sports/delete/<int:id>/', views.deleteSport),
        path('tables/sports/edit/<int:id>/', views.putSport),
        path('tables/sports/add/', views.postSport),

        path('tables/venues/', views.getVenueList),
        path('tables/venuestop3/', views.getTop3VenueList),
        path('tables/venues/delete/<int:id>/', views.deleteVenue),
        path('tables/venues/edit/<int:id>/', views.putVenue),
        path('tables/venues/add/', views.postVenue),

        path('tables/reservations/', views.getReservationsList),
        path('tables/reservations/delete/<int:id>/', views.deleteReservation),
        path('tables/reservations/edit/<int:id>/', views.putReservation),
        path('tables/reservations/add/', views.postReservation),

        path('tables/acceptedinvites/', views.getAcceptedInvitesList),
        path('tables/acceptedinvites/delete/<int:id>/', views.deleteInvite),
        path('tables/acceptedinvites/edit/<int:id>/', views.putInvite),
        path('tables/acceptedinvites/add/', views.postInvite),

        path('tables/questions/', views.getQuestionsList),
        path('tables/questions/delete/<int:id>/', views.deleteQuestion),
        path('tables/questions/edit/<int:id>/', views.putQuestion),
        path('tables/questions/add/', views.postQuestion),

        path('tables/ratings/', views.getRatingsList),
        path('tables/ratings/delete/<int:id>/', views.deleteRating),
        path('tables/ratings/edit/<int:id>/', views.putRating),
        path('tables/ratings/add/', views.postRating),

        path('tables/verification/', views.getCompanyList),
        path('tables/verification/delete/<int:id>/', views.deleteCompany),
        path('tables/verification/edit/<int:id>/', views.putCompany),
]

