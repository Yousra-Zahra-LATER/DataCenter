# Generated by Django 5.0.4 on 2024-08-12 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dc_management', '0010_user_email_user_is_active_user_is_staff_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_staff',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_superuser',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_login',
        ),
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
    ]
