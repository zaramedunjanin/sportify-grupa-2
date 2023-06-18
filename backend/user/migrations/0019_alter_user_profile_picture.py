# Generated by Django 4.1.4 on 2023-06-17 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0018_alter_user_profile_picture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="profile_picture",
            field=models.CharField(
                blank=True,
                default="https://firebasestorage.googleapis.com/v0/b/sportify-4db02.appspot.com/o/files%2Fsportify_default_profile_picture_00.jpg?alt=media&token=1a89aaee-2ca4-4583-9970-b8abfd18ce07",
                max_length=255,
            ),
        ),
    ]