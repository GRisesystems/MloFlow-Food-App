from rest_framework import serializers
from . models import *

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'

class ChefSerializer(serializers.ModelSerializer):
   # reviews = ReviewSerializer(many=True, read_only=True)  # Nested serializer for reviews
    certifications = CertificationSerializer(many=True)
    class Meta:
        model = Chef
        fields = ('country', 'county', 'state', 'profile_picture', 'speciality','certifications')
        #fields = "__all__"
    
    def create(self, validated_data):
        certifications_data = validated_data.pop('certifications')
        Chef = Chef.objects.create(**validated_data)
        for certification_data in certifications_data:
            Certification.objects.create(Chef=Chef, **certification_data)
        return Chef
