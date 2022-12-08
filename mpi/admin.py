from django.contrib import admin
from .models import Patient
from .users import User

# Register your models here.

admin.site.register(Patient)
admin.site.register(User)