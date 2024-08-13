# Generated by Django 5.0.2 on 2024-03-11 23:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dc_management', '0002_cable_plage_vlan_customuser_ipv4networks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='device',
            name='Device_Role',
        ),
        migrations.RemoveField(
            model_name='device',
            name='Device_type',
        ),
        migrations.RemoveField(
            model_name='device',
            name='Ilo_AD',
        ),
        migrations.CreateModel(
            name='Serveur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Ram', models.CharField(max_length=255)),
                ('Processor', models.CharField(max_length=255)),
                ('Disque', models.IntegerField()),
                ('Stockage', models.CharField(max_length=255)),
                ('OS_type', models.CharField(max_length=255)),
                ('Ilo_ad', models.CharField(max_length=255)),
                ('ID_Device', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='dc_management.device')),
            ],
        ),
        migrations.DeleteModel(
            name='DeviceRole',
        ),
        migrations.DeleteModel(
            name='DeviceType',
        ),
    ]
