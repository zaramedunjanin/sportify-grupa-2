# Generated by Django 4.1.4 on 2023-06-04 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0006_alter_user_sport"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="gender",
            field=models.CharField(blank=True, default="Other", max_length=50),
        ),
    ]
