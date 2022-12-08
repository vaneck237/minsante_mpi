from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50, blank=True)
    password = models.CharField(max_length=50, blank=True)

    def _str_(self):
        return self.username