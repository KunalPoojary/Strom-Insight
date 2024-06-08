from .views import DatabaseViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path,include
from .views import UploadDocument

router = DefaultRouter()
router.register(r'database', DatabaseViewSet)

urlpatterns=[
    path('',include(router.urls)),
    path('upload',UploadDocument.as_view()),
]