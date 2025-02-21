# Generated by Django 5.1.2 on 2025-02-01 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0007_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='show_on_homepage',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='image',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='long_description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='place',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
