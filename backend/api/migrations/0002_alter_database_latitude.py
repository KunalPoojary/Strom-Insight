# Generated by Django 4.2.13 on 2024-05-30 13:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="database",
            name="Latitude",
            field=models.IntegerField(),
        ),
    ]