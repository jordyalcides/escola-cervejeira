from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator, MinLengthValidator
from datetime import date



class Post(models.Model):
    autor = models.ForeignKey('auth.User')
    título = models.CharField(max_length=200)
    imagem = models.ImageField(
            upload_to = "post/")
    texto = models.TextField()
    date_de_criação = models.DateTimeField(
            default=timezone.now)
    data_de_publicação = models.DateTimeField(
            blank=True, null=True)

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.data_de_publicação = timezone.now()
        self.save()

    def __str__(self):
        return self.título


class Cerveja(models.Model):
    nome = models.CharField(max_length=200)
    preço = models.DecimalField(default=0, max_digits=5, decimal_places=2)
    categoria = models.CharField(max_length=200)
    avaliação = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(10)])
    imagem = models.ImageField(
            upload_to = "cervejas/")
    descrição = models.TextField(max_length=1000)
    data_de_criação = models.DateTimeField(
            default=timezone.now)
    data_de_publicação = models.DateTimeField(
            blank=True, null=True)

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.data_de_publicação = timezone.now()
        self.save()

    def __str__(self):
        return self.nome


class Curso(models.Model):
    nome = models.CharField(max_length=200, validators=[MinLengthValidator(2)])
    preço = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    local = models.CharField(max_length=100)
    endereço = models.CharField(max_length=200)
    cep = models.CharField(max_length=9, validators=[MinLengthValidator(9)])
    cidade = models.CharField(max_length=100)
    imagem = models.ImageField(
            upload_to = "cursos/")
    descrição = models.TextField()
    organizador = models.CharField(max_length=50)
    email = models.CharField(max_length=200, default='contato@escolacervejeira.com.br')
    data_de_início = models.DateTimeField()
    duração = models.IntegerField(default=0)
    data_de_criação = models.DateTimeField(
            default=timezone.now)
    data_de_publicação = models.DateTimeField(
            blank=True, null=True)

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    @property
    def iniciou(self):
        return timezone.now() > self.data_de_início

    def publish(self):
        self.data_de_publicação = timezone.now()
        self.save()

    def __str__(self):
        return self.nome
