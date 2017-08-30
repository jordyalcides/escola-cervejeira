from .models import Contato

def contato(request):
    return {'contato': Contato.objects.last()}
