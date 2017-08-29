from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Contato, Equipe, Membro, Quem

def quem(request):
    return render(request, 'features-who.html', {})

def equipe(request):
    return render(request, 'features-staff.html', {})

def membro(request):
    return render(request, 'features-staff-member-profile.html', {})

def galeria(request):
    return render(request, 'blog/gallery-cobbles.html', {})
