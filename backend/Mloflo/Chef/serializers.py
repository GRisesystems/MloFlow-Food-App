from rest_framework import serializers
from . models import *

class ChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chef
        fields = ('country', 'county', 'city', 'image', 'speciality', 'qualifications', 'qualification_images', 'star_rating')
        fields = "__all__"