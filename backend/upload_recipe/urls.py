from django.urls import path
from . import views

urlpatterns = [
    path('receipts/', views.ReceiptView.as_view(), name= 'receipts_list'),
]