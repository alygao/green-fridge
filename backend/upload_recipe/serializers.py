from rest_framework import serializers
from .models import *

class FridgeFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = FridgeFood
        fields = '__all__'

class KnownExpiryDateFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnownExpiryDateFood
        fields = ('known_food_name', 'expiration_days',)

class ReceiptSerializer(serializers.ModelSerializer):

    class Meta:
        model = Receipt
        fields = '__all__'