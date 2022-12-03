#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from .models import Patient

from django.template import loader
# Create your views here.

def index(request):
    content = Patient.objects.filter(id=1)
    output = '; '.join([p.nom for p in content])
    template = loader.get_template('home/index.html')
    context = {
        'content' : content,
    }

    return HttpResponse(template.render(context, request))
    # return HttpResponse(output)

def show(request, name):
    return HttpResponse("This is you %s."  % name)

