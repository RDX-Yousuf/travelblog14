from django.urls import path
from .views  import *
from . import views

urlpatterns = [
    path('',home, name='home'),
    path('traveltips/',travel_tips, name='traveltips'),
    path('images/', views.images, name='images'),
    path('destinations/', views.destinations_view, name='destinations'),  # Updated route
    path('destinations/<int:id>/', views.destination_detail, name='destination_detail'),  # This is the updated route
    path('contact/', views.contact_view, name='contact'),
    path('thank-you/', views.thank_you_view, name='thank_you'),
    path('place/<int:place_id>/', views.place_detail, name='place_detail'),
    path('tip/<int:tip_id>/', views.travel_tip_detail, name='tip_detail'),


]
