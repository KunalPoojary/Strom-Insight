# Generated by Django 4.2.13 on 2024-05-31 08:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_alter_database_latitude"),
    ]

    operations = [
        migrations.AddField(
            model_name="database",
            name="Longitude",
            field=models.IntegerField(null=True),
        ),
    ]
