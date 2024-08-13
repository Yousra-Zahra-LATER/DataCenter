# Generated by Django 5.0.4 on 2024-08-12 09:45

import django.contrib.auth.models
import django.contrib.auth.validators
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('dc_management', '0006_alter_datacenter_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('user_type', models.CharField(choices=[('admin', 'Admin'), ('commercial', 'Commercial'), ('client', 'Client')], default='client', max_length=50)),
                ('phone', models.CharField(max_length=15)),
                ('ville', models.CharField(max_length=50)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to.', related_name='custom_user_set', to='auth.group')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='custom_user_permissions_set', to='auth.permission')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.DeleteModel(
            name='Cable',
        ),
        migrations.RemoveField(
            model_name='rack',
            name='ID_DC',
        ),
        migrations.RemoveField(
            model_name='device',
            name='ID_Rack',
        ),
        migrations.RemoveField(
            model_name='serveur',
            name='ID_Device',
        ),
        migrations.RemoveField(
            model_name='device_history',
            name='ID_Device',
        ),
        migrations.RemoveField(
            model_name='ipv4networks',
            name='ID_Plage',
        ),
        migrations.DeleteModel(
            name='Vlan',
        ),
        migrations.DeleteModel(
            name='DataCenter',
        ),
        migrations.DeleteModel(
            name='Rack',
        ),
        migrations.DeleteModel(
            name='Serveur',
        ),
        migrations.DeleteModel(
            name='Device',
        ),
        migrations.DeleteModel(
            name='Device_history',
        ),
        migrations.DeleteModel(
            name='IPv4Networks',
        ),
        migrations.DeleteModel(
            name='Plage',
        ),
    ]
