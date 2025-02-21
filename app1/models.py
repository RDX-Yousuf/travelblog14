from django.db import models
from django.db import models

from django.db import models

class Place(models.Model):
    name = models.CharField(max_length=255)
    short_description = models.TextField()
    long_description = models.TextField()
    image = models.ImageField(upload_to='places/')
    show_on_homepage = models.BooleanField(default=False)  # Determines if a place appears on the homepage

    def __str__(self):
        return self.name


# Contact form model to store submitted messages
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    # other fields as needed


class TravelTip(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.TextField(null=True, blank=True)
    long_description = models.TextField(null=True, blank=True,default='')
    image = models.ImageField(upload_to='traveltips/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # ✅ Add this line

    def __str__(self):
        return self.title
from django.db import models

class Image(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title

# models.py

class Destination(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='destinations/')
    short_description = models.TextField()
    long_description = models.TextField()

    def __str__(self):
        return self.name
