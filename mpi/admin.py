from django.contrib import admin

# Register your models here.

from .models import User, AdminMpi

admin.site.register(User)
admin.site.register(AdminMpi)
