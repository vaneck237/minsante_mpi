from django.db import models

# Create your models here.

class UserMpi():
    pseudo_mpi = models.CharField(max_length=50)
    pass_mpi = models.CharField(max_length=32)


class AdminMpi():
    admin_mpi = models.CharField(max_length=50)
    admin_pass = models.CharField(max_length=50)