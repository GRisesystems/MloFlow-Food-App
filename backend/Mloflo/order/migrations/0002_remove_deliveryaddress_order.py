# Generated by Django 3.2.8 on 2023-09-30 09:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deliveryaddress',
            name='order',
        ),
    ]