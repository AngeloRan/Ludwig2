from rest_framework import serializers
from servizi.models import Servizi


class ServiziSerializer (serializers.ModelSerializer):

    class Meta:
        model = Servizi
        exclude = ["id"]
