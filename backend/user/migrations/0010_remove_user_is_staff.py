# Generated by Django 4.1.4 on 2023-06-04 20:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0009_alter_user_verified"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="is_staff",
        ),
    ]
