from django.contrib import admin
from .models import HealthGoal, Food, Consume

admin.site.register(HealthGoal)
admin.site.register(Food)
admin.site.register(Consume)
