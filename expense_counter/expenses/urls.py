from django.urls import path
from . import views

urlpatterns = [
    path('', views.expense_list, name='expense_list'),
    path('add_category/', views.add_category, name='add_category'),
    path('group_expenses/', views.group_expense_list, name='group_expense_list'),
    path('add_group_expense/', views.add_group_expense, name='add_group_expense'),
]
