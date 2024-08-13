# Generated by Django 5.0.2 on 2024-03-10 07:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DataCenter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=255)),
                ('Localisation', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=255)),
                ('Description', models.CharField(max_length=255)),
                ('U_Position', models.IntegerField()),
                ('Serial_number', models.CharField(max_length=255)),
                ('Status', models.CharField(max_length=255)),
                ('Ilo_AD', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='DeviceRole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=255)),
                ('Description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='DeviceType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=255)),
                ('Description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Device_history',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('From', models.DateField()),
                ('To', models.DateField()),
                ('Description', models.CharField(max_length=255)),
                ('Created', models.DateField()),
                ('created_by', models.CharField(max_length=255)),
                ('Localisation', models.CharField(max_length=255)),
                ('ID_Device', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dc_management.device')),
            ],
        ),
        migrations.AddField(
            model_name='device',
            name='Device_Role',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dc_management.devicerole'),
        ),
        migrations.AddField(
            model_name='device',
            name='Device_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dc_management.devicetype'),
        ),
        migrations.CreateModel(
            name='Rack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Tag', models.CharField(max_length=255)),
                ('Status', models.CharField(max_length=255)),
                ('Height', models.IntegerField()),
                ('U_utilise', models.IntegerField()),
                ('U_dispo', models.IntegerField()),
                ('Devices_Number', models.IntegerField()),
                ('ID_DC', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dc_management.datacenter')),
            ],
        ),
        migrations.AddField(
            model_name='device',
            name='ID_Rack',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dc_management.rack'),
        ),
    ]
