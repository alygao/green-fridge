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

#TODO: return the "about to expire" items

# Create your views here.
class ExpiredFridgeFoodView(APIView): 

 def get(self, request, *args, **kwargs):
      # return a sorted order of fridge foods, with those expiring soon at the beginning
      print( request.query_params )
      print("$$$$$$$$$$$$$$")
      # print(self.kwargs)
      today = date.today
      # fridgeFoods = FridgeFood.objects.all().filter(removed_from_fridge=False, fridge_food_expire_date<= today)
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
      print("$$$$$$$$$$$$$$")
      # print(self.kwargs)
      if (len(self.kwargs) == 0):
            print("no pk")
            fridgeFoods = FridgeFood.objects.all().filter(removed_from_fridge=False)
            serializer = FridgeFoodSerializer(fridgeFoods, many=True)
      else:
            print("pk = " + str(self.kwargs['pk']))
            pk = self.kwargs['pk']
            # fridgeFood = FridgeFood.get(pk=pk, removed_from_fridge=False)
            fridgeFood = get_object_or_404(FridgeFood, pk = pk, removed_from_fridge=False)
            serializer = FridgeFoodSerializer(fridgeFood, many=False)
      # for arg in args:
      #       print(arg)
      print(args)
      return Response(serializer.data)
      


      # return Response(serializer.data)

  def put(self, request, pk, format=None):
  # only called when an fridge food item has been removed from fridge
    print("82347389247389247389247")
    print(str(pk))
    fridgeFood = get_object_or_404(FridgeFood, pk = pk, removed_from_fridge=False)
    if fridgeFood == None:
          print('NONE')
          response = {
            "error": "item not found"
          }
          return Response(response, status=status.HTTP_404_NOT_FOUND)
    else:
      print(fridgeFood)
      # fridgeFood['removed_from_fridge'] = True
      fridgeFood.removeFromFridge()
      print(fridgeFood)
      fridgeFood.save()
      # serializer = FridgeFoodSerializer(fridgeFood, data=request.data)
      # if serializer.is_valid():
      #     serializer.save()
      print('DONE')
      response = {
        "message": "item is removed from fridge"
      }
      return Response(response)
    

  def post(self, request, *args, **kwargs):
  # add new food entry in
  # automatically calculate the date of expiry and number of days till expiry
      print(request.data)
      posts_serializer = FridgeFoodSerializer(data=request.data)
      if posts_serializer.is_valid():
          posts_serializer.save()
          print("fridge food received in backend")
          return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
      else:
          print('error', posts_serializer.errors)
          return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
  
  
class ReceiptView(APIView):
  # parser_classes = (MultiPartParser, FormParser)
  # print("444444444444444") 
  # def get(self, request, *args, **kwargs):
  #     print("2222222222")
  #     receipts = Receipt.objects.all()
  #     serializer = ReceiptSerializer(receipts, many=True)
  #     return Response(serializer.data)

  def post(self, request, *args, **kwargs):
      # print('///////////////////////')
      posts_serializer = ReceiptSerializer(data=request.data)
      if posts_serializer.is_valid():
        posts_serializer.save()
        # console.log("hello, received in backend")
        
        print(request.data)
        # print('???????')
        image_address = posts_serializer.data.get('file')
        # print(posts_serializer.data)
        # print(temp.get('file'))
        text = convertImageToText(image_address)
        text = text.split("\n")
        text = list(filter(None, text))

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
    img = Image.open(image_name[1:])
    text = tess.image_to_string(img)
    print(text)
    return text