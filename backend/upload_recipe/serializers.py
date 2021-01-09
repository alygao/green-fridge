from rest_framework import serializers
from .models import *

class FridgeFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = FridgeFood
        fields = ('fridge_food_name', 'fridge_food_bought_date', 'fridge_food_expire_date', 'days_to_expire', 'removed_from_fridge')

class KnownExpiryDateFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnownExpiryDateFood
        fields = ('known_food_name', 'expiration_days',)

class ReceiptSerializer(serializers.ModelSerializer):

    class Meta:
        model = Receipt
        fields = '__all__'
        # depth = 1