from django.db import models


# Create your models here.

class AdminMpi(models.Model):
    admin_mpi = models.CharField(max_length=50, primary_key=True)
    admin_pass = models.CharField(max_length=50)


class User(models.Model):
    login = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=50)
