# Generated by Django 5.0.4 on 2024-08-04 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dc_management', '0005_datacenter_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datacenter',
            name='Status',
            field=models.CharField(max_length=255),
        ),
    ]
