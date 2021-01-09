from django.shortcuts import render
from django.shortcuts import render
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
class FridgeFoodView(viewsets.ModelViewSet):       
  serializer_class = FridgeFoodSerializer          
  queryset = FridgeFood.objects.all()  

  # parser_classes = (MultiPartParser, FormParser)

  # def get(self, request, *args, **kwargs):
  #     fridgeFoods = FridgeFood.objects.all()
  #     serializer = FridgeFoodSerializer(fridgeFoods, many=True)
  #     return Response(serializer.data)

  # def post(self, request, *args, **kwargs):
  #     posts_serializer = FridgeFoodSerializer(data=request.data)
  #     if posts_serializer.is_valid():
  #         # posts_serializer.save()
  #         console.log("hello, received in backend")
  #         return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
  #     else:
  #         print('error', posts_serializer.errors)
  #         return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

# class ReceiptView(viewsets.ModelViewSet):   

def convertImageToText (image_name):
    print(image_name)
    img = Image.open(image_name[1:])
    text = tess.image_to_string(img)
    print(text)
    return text


class ReceiptView(APIView):
  # print("///////////////////////")   
  # serializer_class = ReceiptSerializer 
  # print("2222222222222222")           
  # queryset = Receipt.objects.all()  
  # print("333333333333") 

  parser_classes = (MultiPartParser, FormParser)
  print("444444444444444") 
  def get(self, request, *args, **kwargs):
      print("2222222222")
      receipts = Receipt.objects.all()
      serializer = ReceiptSerializer(receipts, many=True)
      return Response(serializer.data)




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

        context = {
          "info" : "success",
          "text" : text
        }
              

        return Response(context, status=status.HTTP_201_CREATED)
      else:
        print('error', posts_serializer.errors)
        return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)  


class KnownExpiryDateFoodView(viewsets.ModelViewSet):       
  serializer_class = KnownExpiryDateFoodSerializer          
  queryset = KnownExpiryDateFood.objects.all()           