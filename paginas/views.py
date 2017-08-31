from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Contato, Equipe, Membro, Quem, Foto

def quem(request):
    quem = Quem.objects.last()
    return render(request, 'features-who.html', {'quem': quem})

def equipe(request):
    contato = Contato.objects.last()
    equipe = Equipe.objects.last()
    membros = Membro.objects.all()
    return render(request, 'features-staff.html', {'contato': contato, 'equipe': equipe, 'membros': membros})

def membro(request, pk):
    membro = get_object_or_404(Membro, pk=pk)
    return render(request, 'features-staff-member-profile.html', {'membro': membro})

def galeria(request):
    fotos = Foto.objects.all()
    return render(request, 'gallery-cobbles.html', {'fotos': fotos})