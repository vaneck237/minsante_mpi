from django.shortcuts import render
from django.http import HttpResponse, HttpRequest

# Create your views here.

def index(request:HttpRequest):
    return render(request, 'patient/index.html') 


def about(request:HttpRequest):
    return render(request, 'patient/about.html')
