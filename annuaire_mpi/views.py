#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from matching_mpi.models import Patient
# Create your views here.

# def index(request):
#     content = Patient.objects.filter(id=1)
#     output = '; '.join([p.nom for p in content])
#     template = loader.get_template('home/index.html.save')
#     context = {
#         'content' : content,
#     }
#
#     return HttpResponse(template.render(context, request))
#     # return HttpResponse(output)

# def show(request, name):
#     return HttpResponse("This is you %s."  % name)

def annuaire(request):
    patient_list = Patient.objects.all()
    template = loader.get_template('annuaire/liste.html')
    context = {
        patient_list
    }

    return HttpResponse(template.render(context, request))

