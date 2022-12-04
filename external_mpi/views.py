#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse

from django.template import loader
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


# Login page
def external(request):
    template = loader.get_template('enregistrement/index.html')
    context = {}
    return HttpResponse(template.render(context, request))
