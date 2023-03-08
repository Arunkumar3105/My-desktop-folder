from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class AdminList(APIView):
    def get(self, request):
        adminobj = Claimant.objects.all()
        serializer = ClaimantSerializer(adminobj, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ClaimantSerializer(data=request.data)
        msg = {}
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "Registration Successful"}, status=status.HTTP_201_CREATED)
        if "ErrorDetail" in str(serializer.errors):
            msg = {"msg": "Enter the required Fields"}
        return Response(msg, status=status.HTTP_404_NOT_FOUND)
