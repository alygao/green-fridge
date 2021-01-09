from django.urls import path
from . import views

urlpatterns = [
    path('receipts/', views.ReceiptView.as_view(), name= 'receipts_list'),
    path('fridgeFoods/expired/', views.ExpiredFridgeFoodView.as_view()),
    path('fridgeFoods/<int:pk>/', views.FridgeFoodView.as_view()),
    path('fridgeFoods/', views.FridgeFoodView.as_view()),
]