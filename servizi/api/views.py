from rest_framework import generics
from servizi.api.serializers import ServiziSerializer
from servizi.models import Servizi


class ServiziListReadView(generics.ListAPIView):
    queryset = Servizi.objects.all()
    model = Servizi
    serializer_class = ServiziSerializer
