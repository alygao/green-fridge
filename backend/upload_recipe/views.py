from django.shortcuts import render
from django.http import Http404
from rest_framework import viewsets  
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from .serializers import FridgeFoodSerializer, KnownExpiryDateFoodSerializer, ReceiptSerializer   
from .models import FridgeFood, KnownExpiryDateFood, Receipt                   

import pytesseract as tess
tess.pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract.exe'
from PIL import Image


# Create your views here.
class ExpiredFridgeFoodView(APIView): 

  def get(self, request, *args, **kwargs):
      #only get expired foods in fridge
      # return a sorted order of fridge foods, with those expiring soon at the beginning
      fridgeFoods = FridgeFood.objects.all()
      serializer = FridgeFoodSerializer(fridgeFoods, many=True)


      return Response(serializer.data)


class FridgeFoodView(APIView):       

  def get_object(self, pk):
  # may not need 
        try:
            return FridgeFood.objects.get(pk=pk)
        except FridgeFood.DoesNotExist:
            raise Http404

  def get(self, request, *args, **kwargs):
  # return a sorted order of fridge foods, with those expiring soon at the beginning
      fridgeFoods = FridgeFood.objects.all()
      serializer = FridgeFoodSerializer(fridgeFoods, many=True)


      return Response(serializer.data)

  def put(self, request, pk, format=None):
  # only called when an fridge food item has been removed from fridge
    fridgeFood = self.get_object(pk)
    serializer = FridgeFoodSerializer(fridgeFood, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def post(self, request, *args, **kwargs):
  # add new food entry in
  # automatically calculate the date of expiry and number of days till expiry
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