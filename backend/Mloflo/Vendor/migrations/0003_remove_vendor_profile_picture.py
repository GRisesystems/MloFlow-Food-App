# Generated by Django 4.2.4 on 2023-08-30 20:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("Vendor", "0002_vendor_profile_picture"),
    ]

    operations = [
        migrations.RemoveField(model_name="vendor", name="profile_picture",),
    ]