from django.db import models

# Create your models here.


class Servizi (models.Model):
    titolo = models.CharField(max_length=100)
    prezzo = models.CharField(max_length=15)
    descrizione = models.TextField(max_length=2000)
    tipo = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Servizi"

    def __str__(self):
        return f"{self.titolo}"
