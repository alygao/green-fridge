from django.db import models
from datetime import datetime, timedelta, date

# Create your models here.
class KnownExpiryDateFood (models.Model) :
    known_food_name = models.CharField(max_length=120)
    expiration_days = models.IntegerField()

    def _str_(self):
        return self.known_food_name + ' will expire in ' + self.expiration_days + 'days'
    

class FridgeFood (models.Model) :
    fridge_food_name = models.CharField(max_length=120)
    fridge_food_bought_date = models.DateField(default=date.today)
    fridge_food_expire_date = models.DateField(default=datetime.now()+timedelta(days=365)) # expire in 1 year
    days_to_expire = models.IntegerField()
    removed_from_fridge = models.BooleanField(default=True)


    def _str_(self):
        return self.fridge_food_name + ' will expire in ' + self.days_to_expire + 'days. Bought: ' + self.fridge_food_bought_date 
        + ', Expire: ' + self.fridge_food_expire_date + 'Expired: ' + self.removed_from_fridge