from django.views.generic.base import TemplateView


class EntryPointView(TemplateView):
    template_name = 'index.html'
