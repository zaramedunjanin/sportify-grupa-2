from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.signup, name='signup'),
    path('user', views.getUnpackedToken, name='user'),
    path('user_info', views.getUserFromDatabase, name='user'),
]