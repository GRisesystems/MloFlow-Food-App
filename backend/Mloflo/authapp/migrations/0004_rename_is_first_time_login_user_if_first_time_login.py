# Generated by Django 4.2.4 on 2023-08-17 11:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("authapp", "0003_rename_is_adminnnn_user_is_admin_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="user",
            old_name="is_first_time_login",
            new_name="if_first_time_login",
        ),
    ]