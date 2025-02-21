from django.contrib import admin
from .models import Place, TravelTip, Image 
from .models import Destination # Import models properly

@admin.register(Place)
class PlaceAdmin(admin.ModelAdmin):
    list_display = ('name', 'show_on_homepage', 'short_description')  # Merged display fields
    list_filter = ('show_on_homepage',)
    search_fields = ('name', 'short_description')

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'description')
    search_fields = ('title', 'description')
    list_filter = ('title',)
    ordering = ('title',)

    fieldsets = (
        (None, {
            'fields': ('title', 'image'),
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': ('description',),
        }),
    )

@admin.register(TravelTip)
class TravelTipAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'short_description')
    list_filter = ('created_at',)



# Admin class to customize the Destination model admin
class DestinationAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_description')  # Show name and short description in the list view
    search_fields = ('name',)  # Allow searching by name in the admin panel
    list_filter = ('name',) 

# Register the Destination model with the custom DestinationAdmin class
admin.site.register(Destination, DestinationAdmin)
