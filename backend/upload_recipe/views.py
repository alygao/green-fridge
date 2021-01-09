from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import FridgeFoodSerializer, KnownExpiryDateFoodSerializer    
from .models import FridgeFood, KnownExpiryDateFood                   


# Create your views here.
class FridgeFoodView(viewsets.ModelViewSet):       
  serializer_class = FridgeFoodSerializer          
  queryset = FridgeFood.objects.all()    

class KnownExpiryDateFoodView(viewsets.ModelViewSet):       
  serializer_class = KnownExpiryDateFoodSerializer          
  queryset = KnownExpiryDateFood.objects.all()           