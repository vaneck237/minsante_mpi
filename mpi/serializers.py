from rest_framework import serializers
from .users import User

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        field = '__all__'