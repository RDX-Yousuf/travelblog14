# Generated by Django 5.1.2 on 2025-01-30 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_place'),
    ]

    operations = [
        migrations.CreateModel(
            name='TravelTip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('short_description', models.TextField()),
                ('long_description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='travel_tips/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
