from django.shortcuts import render,redirect
from .forms import ContactForm
from django.contrib import messages  # To show success or error messages

from django.shortcuts import render, get_object_or_404
from .models import Place
from .models import TravelTip
from .models import Image
from .models import TravelTip




#contact view

from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponseRedirect
from .forms import ContactForm

from .models import Destination 
from django.shortcuts import render, get_object_or_404
from .models import Destination

def destination_detail(request, id):
    
    destination = get_object_or_404(Destination, id=id)
    return render(request, 'destination_detail.html', {'destination': destination})


def destinations_view(request):
    destinations = Destination.objects.all()  # Fetch all destinations
    return render(request, 'destinations.html', {'destinations': destinations})




def home(request):
    places = Place.objects.filter(show_on_homepage=True)  # Fetch only places meant for home
    return render(request, "home.html", {"places": places})



def images(request):
    images = Image.objects.all()  # Get all Image objects from the database
    return render(request, 'images.html', {'images': images})  # Pass the images to the template




def travel_tips(request):
    tips = TravelTip.objects.all().order_by('-created_at')
    return render(request, 'travel_tips.html', {'tips': tips})

def travel_tip_detail(request, tip_id):
    # Fetch the specific tip using the id
    tip = get_object_or_404(TravelTip, pk=tip_id)
    return render(request, 'tip_detail.html', {'tip': tip})


def home(request):
    places = Place.objects.all()
    return render(request, 'home.html', {'places': places})

def place_detail(request, place_id):
    place = get_object_or_404(Place, id=place_id)
    return render(request, 'place_detail.html', {'place': place})


from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponseRedirect
from .forms import ContactForm

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Get the cleaned data from the form
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # Send the email to the admin
            admin_email = 'ursgamyam@gmail.com'  # Replace with the admin's email
            send_mail(
                f'New Contact Message from {name}',
                f'Name: {name}\nEmail: {email}\nMessage: {message}',
                email,  # From the user's email
                [admin_email],  # To the admin's email
                fail_silently=False,
            )

            # Send the thank you email to the user
            send_mail(
                'Thank You for Contacting Us',
                f'Dear {name},\n\nThank you for reaching out! We will get back to you soon.',
                settings.EMAIL_HOST_USER,  # From your admin email
                [email],  # To the user's email
                fail_silently=False,
            )

            # Redirect to a thank you page or show a success message
            return HttpResponseRedirect('/thank-you/')  # Redirect to a thank you page

    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})



def thank_you_view(request):
    return render(request, 'thank_you.html')


