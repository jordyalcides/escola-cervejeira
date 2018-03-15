# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.validators import RegexValidator



class Contato(models.Model):
    nome = models.CharField(max_length=20, unique=True, editable=False, default='Meu contato')
    endereco = models.CharField(max_length=200, verbose_name='endereço')
    bairro = models.CharField(max_length=100)
    cep = models.CharField(max_length=9, validators=[ RegexValidator(regex='^\d{5}-\d{3}$', message='Digite um CEP válido. Ex: 99999-999') ], verbose_name='CEP')
    email = models.EmailField(max_length=100)
    telefone = models.CharField(max_length=13, validators=[ RegexValidator(regex='^\d{2}\s\d{5}-\d{4}$', message='Informe um celular válido. Ex: 99 99999-9999') ], verbose_name='celular')
    telefone2 = models.CharField(max_length=13, validators=[ RegexValidator(regex='^\d{2}\s\d{4}-\d{4}$', message='Informe um telefone válido. Ex: 99 9999-9999') ], blank=True, verbose_name='telefone fixo')
    facebook = models.URLField(max_length=200, blank=True)
    instagram = models.URLField(max_length=200, blank=True, verbose_name='Instagram')
    twitter = models.URLField(max_length=200, blank=True)

    def publish(self):
        self.save()

    def __str__(self):
        return self.nome



class Equipe(models.Model):
    nome = models.CharField(max_length=10, unique=True, editable=False, default='Equipe')
    descricao = models.TextField(max_length=400, verbose_name='descrição')
    imagem = models.ImageField(upload_to = "equipe/")

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.save()

    def __str__(self):
        return self.nome



class Membro(models.Model):
    nome = models.CharField(max_length=100, validators=[RegexValidator(regex='^(\w+\s?)+$', message='Utilize somente letras, espaços e números')])
    cargo = models.CharField(max_length=100)
    imagem = models.ImageField(upload_to="membros/")
    descricao = models.TextField(verbose_name='descrição')
    facebook = models.URLField(max_length=200, blank=True)
    instagram = models.URLField(max_length=200, blank=True, verbose_name='Instagram')
    twitter = models.URLField(max_length=200, blank=True)

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.save()

    def __str__(self):
        return self.nome



class Quem(models.Model):
    nome = models.CharField(max_length=10, unique=True, editable=False, default='Quem somos')
    descricao = models.TextField(verbose_name='descrição')
    imagem = models.ImageField(upload_to = "quem/")

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.save()

    def __str__(self):
        return self.nome



class Foto(models.Model):
    nome = models.CharField(max_length=50)
    imagem = models.ImageField(upload_to = 'galeria/%Y/%m/%d/')
    data = models.DateField(default=timezone.now)

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.save()

    def __str__(self):
        return self.nome
