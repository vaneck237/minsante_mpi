from django.urls import path
from . import views

urlpatterns = [
    path('patient/', views.index,name="patient_page"),
    path('patient/about', views.about,name="about_page"),
]