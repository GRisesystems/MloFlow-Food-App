from rest_framework import serializers
from . models import *

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class ChefSerializer(serializers.ModelSerializer):
   # reviews = ReviewSerializer(many=True, read_only=True)  # Nested serializer for reviews
    class Meta:
        model = Chef
        fields = ('country', 'county', 'city', 'profile_picture', 'speciality', 'qualifications', 'certification')
        #fields = "__all__"
