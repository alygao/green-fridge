from django.db import models
from datetime import datetime, timedelta, date

# Create your models here.
class KnownExpiryDateFood (models.Model) :
    known_food_name = models.CharField(max_length=120)
    expiration_days = models.IntegerField()

    def __str__(self):
        return self.known_food_name + ' will expire in ' + str(self.expiration_days) + ' days'
    

class FridgeFood (models.Model) :
    fridge_food_name = models.CharField(max_length=120, default="FALSE_ENTRY")
    fridge_food_bought_date = models.DateField(default=date.today)
    fridge_food_expire_date = models.DateField(default=date.today()+timedelta(days=365)) # expire in 1 year
    days_to_expire = models.IntegerField(default=0)
    removed_from_fridge = models.BooleanField(default=True)


    # def __str__(self):
    #     return str(self.id) + ' : ' + self.fridge_food_name + ' will expire in ' + str(self.days_to_expire) + ' days. Bought: ' + str(self.fridge_food_bought_date) 
    #     + ', Expire: ' + str(self.fridge_food_expire_date) + 'Expired: ' + self.removed_from_fridge

    def __str__(self):
        return self.fridge_food_name + ' will expire in ' + str(self.days_to_expire) + ' days. Bought: ' + str(self.fridge_food_bought_date) + ', Expire: ' + str(self.fridge_food_expire_date) + 'Expired: ' + str(self.removed_from_fridge)

    def removeFromFridge(self):
        self.removed_from_fridge = True


class Receipt (models.Model):
    print("555555555555")
    file = models.FileField(upload_to="receipts/")