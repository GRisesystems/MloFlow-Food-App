from rest_framework import generics
from .models import Chef
from .serializers import ChefSerializer

class ChefListCreateView(generics.ListCreateAPIView):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer

class ChefRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer