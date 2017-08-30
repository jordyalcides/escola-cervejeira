from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator, MinLengthValidator, RegexValidator
from datetime import date


class Post(models.Model):
    autor = models.ForeignKey('auth.User')
    titulo = models.CharField(max_length=200, verbose_name='título')
    imagem = models.ImageField(upload_to = "posts/")
    texto = models.TextField()
    date_de_criacao = models.DateTimeField(default=timezone.now, verbose_name='data de criação')
    data_de_publicacao = models.DateTimeField(blank=True, null=True, verbose_name='data de publicação')

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.data_de_publicacao = timezone.now()
        self.save()

    def __str__(self):
        return self.titulo


class Cerveja(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(default=0, max_digits=5, decimal_places=2, verbose_name='preço')
    categoria = models.CharField(max_length=100)
    avaliacao = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(10)], verbose_name='avaliação')
    imagem = models.ImageField(upload_to = "cervejas/")
    descricao = models.TextField(max_length=1000, verbose_name='descrição')
    data_de_criacao = models.DateTimeField(default=timezone.now, verbose_name='data de criação')
    data_de_publicacao = models.DateTimeField(blank=True, null=True, verbose_name='data de publicação')

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    def publish(self):
        self.data_de_publicacao = timezone.now()
        self.save()

    def __str__(self):
        return self.nome


class Curso(models.Model):
    nome = models.CharField(max_length=100, validators=[RegexValidator(regex='^([A-Z][a-zA-Z]+\s*)+$', message='Digite um nome válido. Ex: Seu Nome De Exemplo ')])
    preco = models.DecimalField(max_digits=6, decimal_places=2, default=0, verbose_name='preço')
    local = models.CharField(max_length=100)
    endereco = models.CharField(max_length=200, verbose_name='endereço')
    cep = models.CharField(max_length=9, validators=[ RegexValidator(regex='^\d{5}-\d{3}$', message='Digite um CEP válido. Ex: 99999-999') ], verbose_name='CEP')
    cidade = models.CharField(max_length=100)
    imagem = models.ImageField(upload_to = "cursos/")
    descricao = models.TextField(verbose_name='descrição')
    organizador = models.CharField(max_length=50)
    email = models.EmailField(max_length=200)
    data_de_inicio = models.DateTimeField(default=timezone.now, verbose_name='data de início')
    duracao = models.IntegerField(default=0, verbose_name='duração')
    data_de_criacao = models.DateTimeField(default=timezone.now, verbose_name='data de criação')
    data_de_publicacao = models.DateTimeField(blank=True, null=True, verbose_name='data de publicação')

    @property
    def imagem_url(self):
        if self.imagem and hasattr(self.imagem, 'url'):
            return self.imagem.url

    @property
    def iniciou(self):
        return timezone.now() > self.data_de_inicio

    def publish(self):
        self.data_de_publicacao = timezone.now()
        self.save()

    def __str__(self):
        return self.nome
