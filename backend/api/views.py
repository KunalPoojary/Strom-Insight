from django.shortcuts import render
from rest_framework import viewsets
import os
from .models import Database
from rest_framework.response import Response
from rest_framework import status
from .serializers import DatabaseSerializer
from rest_framework.views import APIView
import tensorflow as tf
from keras.preprocessing.image import img_to_array, load_img

model = tf.keras.models.load_model('Model.h5')

class DatabaseViewSet(viewsets.ModelViewSet):
    serializer_class= DatabaseSerializer
    queryset = Database.objects.all()

class UploadDocument(APIView):
    def post(self,request):
        try:
            data = self.request.data

            path = "C:/Users/kunal/OneDrive/Desktop/StormInsight/backend/media/"


            Image_File  = data['Image_File']
            Latitude = data['latitude']
            Longitude = data['longitude']
            

            Database.objects.create(
                Image_File = Image_File,
                Latitude = Latitude,
                Longitude = Longitude,
            )

            file  = Database.objects.last()
            file_name = file.Image_File.name
            path = path + str(file_name)
            image = load_img(path, target_size=(512, 512))
            image = img_to_array(image) / 255.0
            image_tensor = tf.convert_to_tensor(image)
            image_tensor = tf.expand_dims(image_tensor, axis=0)
            pred = model.predict(image_tensor)
            pred = pred[0][0].astype(int)
            print(pred)
            pred = str(pred)

            file.Predicted_Intensity = pred
            file.save()


            return Response(
                {'result': pred}
            )
        except Exception as e:
            print("An error occurred:", type(e).__name__, "–", e)
            return Response(
                {'error': 'Something went wrong when uploading image'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
#  image = load_img(image_path, target_size=(512, 512))
#         # Preprocess the image
#         image = img_to_array(image) / 255.0
#         # Convert the image to a tensor
#         image_tensor = tf.convert_to_tensor(image)
#         # Add a batch dimension
#         image_tensor = tf.expand_dims(image_tensor, axis=0)
#         #Predict the intensity
#         predicted_intensity = model.predict(image_tensor)
#         predicted_intensity = predicted_intensity[0][0].astype(int)    
    