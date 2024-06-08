from django.db import models
from django.conf import settings

class Database(models.Model):
    date = models.DateField(auto_now_add = True)
    time = models.TimeField(auto_now_add = True)
    Latitude = models.DecimalField(max_digits=10, decimal_places=7)
    Longitude = models.DecimalField(max_digits=10, decimal_places=7)
    Image_File = models.ImageField(upload_to='images')
    Predicted_Intensity = models.CharField(max_length=6)
    

    def __str__(self):
        return str(self.id)
    
    def get_image_path(self):
        return self.Image_File.name
    
    
    # def get_image_path(self):
    #     instance = Database.objects.get(id=1)
    #     path = instance.Image_File.path
    #     path = os.path.dirname(path)
    #     path = os.path.join(path,self.Image_File.name)
    #     path = path.replace('\\', '/')
    #     return path

    # def preprocess_image(path,self):
    #     path = self.get_image_path()
    #     image = load_img(path, target_size=(512, 512))
    #     image = img_to_array(image) / 255.0
    #     image_tensor = tf.convert_to_tensor(image)
    #     image_tensor = tf.expand_dims(image_tensor, axis=0)
        
    #     return image_tensor
    
    # def save(self, *arg, **kwargs):
    #     super().save(*arg, **kwargs)
    #     path = self.get_image_path()
        
    
    # def save(self, *args, **kwargs):
    #     path = os.path.join(settings.MEDIA_ROOT, self.Image_File.path)
    #     image = load_img(path, target_size=(512, 512))
    #     print(image)
    #     image = img_to_array(image) / 255.0
    #     image_tensor = tf.convert_to_tensor(image)
    #     image_tensor = tf.expand_dims(image_tensor, axis=0)
    #     super().save(*args, **kwargs)
    #     try:
    #         model = tf.keras.models.load_model('Model.h5')
    #         pred = model.predict(image_tensor)
    #         pred = pred[0][0].astype(int)
    #         self.Predicted_Intensity = str(pred)
    #         print (f'classified as {pred}')
    #     except:
    #         print("Model not found")
    #     super().save(*args, **kwargs)
