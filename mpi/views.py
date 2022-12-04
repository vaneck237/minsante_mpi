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

def register(request):
    if request.method == 'POST':
        name = request.POST['name']
        cni = request.POST['cni']
        sexe = request.POST['sexe']
        dob = request.POST['dob']
        tel = request.POST['tel']
        region = request.POST['region']
        etranger = request.POST['etranger']

        unique_id = Patient.save_patient(nom=name,cni=cni,sexe=sexe,dob=dob,tel=tel,
                        region=region,etranger=etranger)

    return render(request, 'registration/index.html')
