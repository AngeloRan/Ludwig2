from django.urls import path
from servizi.api.views import ServiziListReadView

urlpatterns = [
    path('services/', ServiziListReadView.as_view(), name="servizi-list")
]
