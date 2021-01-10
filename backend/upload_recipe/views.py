from django.shortcuts import render, get_object_or_404
from django.http import Http404
from rest_framework import viewsets  
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from datetime import date, datetime, timedelta

from .serializers import FridgeFoodSerializer, KnownExpiryDateFoodSerializer, ReceiptSerializer   
from .models import FridgeFood, KnownExpiryDateFood, Receipt                   

import pytesseract as tess
tess.pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract.exe'
from PIL import Image

import os

#TODO: return the "about to expire" items

# Create your views here.
class ExpiredFridgeFoodView(APIView): 

 def get(self, request, *args, **kwargs):
      # return a sorted order of fridge foods, with those expiring soon at the beginning
      print( request.query_params )
      print("$$$$$$$$$$$$$$")
      today = date.today
      fridgeFoods = FridgeFood.objects.all().filter(removed_from_fridge=False, fridge_food_expire_date__lt = datetime.now())
      serializer = FridgeFoodSerializer(fridgeFoods, many=True)
      return Response(serializer.data)


class FridgeFoodView(APIView):       

  def get_object(self, pk):
    # may not need 
        try:
            print("pk" )
            print(pk)
            return FridgeFood.objects.get(pk=pk)
        except FridgeFood.DoesNotExist:
            raise Http404

  def get_object(self, request, pk):
      # may not need 
        try:
            print("request = " + request)
            print(pk)
            return FridgeFood.objects.get(pk=pk)
        except FridgeFood.DoesNotExist:
            raise Http404

  def get(self, request, *args, **kwargs):
  # return a sorted order of fridge foods, with those expiring soon at the beginning
      print( request.query_params )
      # print(self.kwargs)
      if (len(self.kwargs) == 0):
            # print("no pk")
            fridgeFoods = FridgeFood.objects.all().filter(removed_from_fridge=False).order_by('days_to_expire')
            serializer = FridgeFoodSerializer(fridgeFoods, many=True)
      else:
            # print("pk = " + str(self.kwargs['pk']))
            pk = self.kwargs['pk']
            fridgeFood = get_object_or_404(FridgeFood, pk = pk, removed_from_fridge=False)
            serializer = FridgeFoodSerializer(fridgeFood, many=False)
      return Response(serializer.data)
      
  def put(self, request, pk, format=None):
  # only called when an fridge food item has been removed from fridge
    print("82347389247389247389247")
    print(str(pk))
    fridgeFood = get_object_or_404(FridgeFood, pk = pk, removed_from_fridge=False)
    if fridgeFood == None:
          # print('NONE')
          response = {
            "error": "item not found"
          }
          return Response(response, status=status.HTTP_404_NOT_FOUND)
    else:
      print(fridgeFood)
      fridgeFood.removeFromFridge()
      print(fridgeFood)
      fridgeFood.save()
      # print('DONE')
      response = {
        "message": "item is removed from fridge"
      }
      return Response(response)
    

  def post(self, request, *args, **kwargs):
  # add new food entry in
  # automatically calculate the date of expiry and number of days till expiry
      print(request.data)
      try:
        name = request.data['fridge_food_name']
        print(name)
        knownFoodInDatabase = KnownExpiryDateFood.objects.get(known_food_name = name)
        if (knownFoodInDatabase != None) :
            print(name)
            expiration_days = knownFoodInDatabase.expiration_days
            today = date.today()
            expiry_day = today + timedelta(days=expiration_days)
            new_fridge_food = FridgeFood.objects.create(fridge_food_name=name, fridge_food_bought_date=today, fridge_food_expire_date=expiry_day, days_to_expire=expiration_days, removed_from_fridge=False)
            print(new_fridge_food)
            new_fridge_food.save()
            response = {
              "id": new_fridge_food.id,
              "fridge_food_name": new_fridge_food.fridge_food_name,
              "fridge_food_bought_date": new_fridge_food.fridge_food_bought_date,
              "fridge_food_expire_date": new_fridge_food.fridge_food_expire_date,
              "days_to_expire": new_fridge_food.days_to_expire,
              "removed_from_fridge": new_fridge_food.removed_from_fridge
            }
            return Response(response, status=status.HTTP_201_CREATED)
      except Exception as e:
        print(e)
        print(name + " doesn't exist in known database")
        return Response(status=status.HTTP_400_BAD_REQUEST)  
  
  
class ReceiptView(APIView):
  def post(self, request, *args, **kwargs):
      posts_serializer = ReceiptSerializer(data=request.data)
      if posts_serializer.is_valid():
        posts_serializer.save()
        print(request.data)
        image_address = posts_serializer.data.get('file')
        image_address = image_address[1:]
        # print(posts_serializer.data)
        # print(temp.get('file'))

        # convert image to text
        text = convertImageToText(image_address)
        os.remove(image_address)

        text = text.split("\n")
        text = list(filter(None, text))
        text = find_foods(text)
        for string in text:
          string = string.lower()
          try:
            knownFoodInDatabase = KnownExpiryDateFood.objects.get(known_food_name = string)
            if (knownFoodInDatabase != None) :
              print(string)
              expiration_days = knownFoodInDatabase.expiration_days
              today = date.today()
              expiry_day = today + timedelta(days=expiration_days)
              new_fridge_food = FridgeFood.objects.create(fridge_food_name=string, fridge_food_bought_date=today, fridge_food_expire_date=expiry_day, days_to_expire=expiration_days, removed_from_fridge=False)
              print(new_fridge_food)
              new_fridge_food.save()
            else:
              continue
          except Exception as e:
            print(e)
            print(string + " doesn't exist in known database")

        context = {
          "info" : "success",
          "text" : text
        }
        return Response(context, status=status.HTTP_201_CREATED)
      else:
        print('error', posts_serializer.errors)
        return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)  


class KnownExpiryDateFoodView(APIView):       
  serializer_class = KnownExpiryDateFoodSerializer          
  queryset = KnownExpiryDateFood.objects.all()           

  
def convertImageToText (image_name):
    print(image_name)
    img = Image.open(image_name)
    text = tess.image_to_string(img)
    return text


def find_foods(strings):
    ignore = ['receipt', 'subtotal', 'tax', '$', '\f', '.', ':', ',', '?', '#', " "] + [str(i) for i in range(10)]
    res = []
    for string in strings:
        st = string.lower()
        for i in ignore:
            st = st.replace(i, "")
        if st != "":
            res.append(st)
    return res

