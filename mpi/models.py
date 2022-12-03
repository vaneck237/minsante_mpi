from django.db import models

# Create your models here.

class Patient(models.Model):
    nom = models.CharField(max_length=100 , blank=True)
    prenom = models.CharField(max_length=50, blank=True)
    date_naiss = models.DateField('date naissance' , blank=True)
    lieu_naiss = models.CharField(max_length=50 , blank=True)
    sexe = models.CharField(max_length=1 , blank=True)
    email = models.CharField(max_length=50, blank=True)
    num_CNI = models.CharField(max_length=20 , blank=True)
    num_passeport = models.CharField(max_length=20 , blank=True)
    titreSej = models.CharField(max_length=20 , blank=True)
    numero_permis = models.CharField(max_length=20 , blank=True)
    num_CNPS = models.CharField(max_length=20 , blank=True)
    NUI = models.CharField(max_length=40 , blank=True)
    num_actenais = models.CharField(max_length=40 , blank=True)
    nationalite_origine = models.CharField(max_length=50 , blank=True)
    autre_nationalite = models.CharField(max_length=50 , blank=True)
    region_origine = models.CharField(max_length=30 , blank=True)
    religion = models.CharField(max_length=30 , blank=True)
    commune_naissance = models.CharField(max_length=30 , blank=True)
    nom_marital = models.CharField(max_length=100 , blank=True)
    pseudonyme = models.CharField(max_length=50 , blank=True)
    adresse = models.CharField(max_length=100 , blank=True)
    telephone = models.CharField(max_length=20 , blank=True)
    fixe = models.CharField(max_length=20 , blank=True)
    mobile = models.CharField(max_length=200 , blank=True)
    statut_marital = models.CharField(max_length=10 , blank=True)
    parents = models.CharField(max_length=200 , blank=True)
    descendants = models.CharField(max_length=200 , blank=True)
    groupe_sanguin = models.CharField(max_length=1 , blank=True)
    alergies = models.CharField(max_length=200 , blank=True)
    pathologies = models.CharField(max_length=200 , blank=True)
    fonction = models.CharField(max_length=40 , blank=True)
    categorie_socioprofessionnal = models.CharField(max_length=40 , blank=True)
    casier = models.CharField(max_length=20 , blank=True)
    biometrie = models.CharField(max_length=400 , blank=True)
    marque = models.CharField(max_length=10 , blank=True)
    tache_naissance = models.CharField(max_length=10 , blank=True)
    
class User(models.Model):
    login = models.CharField(max_length=50, primary_key=True)  
    password = models.CharField(max_length=50) 