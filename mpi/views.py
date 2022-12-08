#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from . users import User
from .serializers import PostSerializer

from django.template import loader
# Create your views here.

class UsersView(generics.RetrieveAPIView):
    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

def index(request):
    template = loader.get_template('home/index.html')
    context = {}
    return HttpResponse(template.render(context, request))

def show(request, name):
    return HttpResponse("This is you %s."  % name)


