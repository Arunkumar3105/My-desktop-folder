from rest_framework import serializers
from .models import *


class ClaimantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claimant
        fields = [
            'colors'
        ]
