from .models import Category
from rest_framework import serializers

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields =("id","name" ,"description")
        fields = '__all__'