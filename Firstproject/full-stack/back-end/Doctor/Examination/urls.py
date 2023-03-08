
from django.urls import path
from .views import AdminList

urlpatterns = [
    path('color/', AdminList.as_view()),



]
