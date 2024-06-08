from rest_framework import serializers
from .models import Database


class DatabaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = ['id','Image_File', 'Latitude', 'Longitude','Predicted_Intensity']