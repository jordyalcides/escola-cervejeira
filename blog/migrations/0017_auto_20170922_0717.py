# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-22 10:17
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import django.utils.timezone
import geoposition.fields


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0016_merge_20170921_2150'),
    ]

    operations = [
        migrations.CreateModel(
            name='Newsletter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=100, unique=True)),
            ],
        ),
        migrations.AlterField(
            model_name='cerveja',
            name='data_de_criacao',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name=b'data de cria\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='cerveja',
            name='data_de_publicacao',
            field=models.DateTimeField(blank=True, null=True, verbose_name=b'data de publica\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='cerveja',
            name='descricao',
            field=models.TextField(max_length=1000, verbose_name=b'avalia\xc3\xa7\xc3\xa3o da cerveja'),
        ),
        migrations.AlterField(
            model_name='cerveja',
            name='nota1',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(10)], verbose_name=b'apar\xc3\xaancia'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='cep',
            field=models.CharField(max_length=9, validators=[django.core.validators.RegexValidator(message=b'Digite um CEP v\xc3\xa1lido. Ex: 99999-999', regex=b'^\\d{5}-\\d{3}$')], verbose_name=b'CEP'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='data_de_criacao',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name=b'data de cria\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='data_de_inicio',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'data de in\xc3\xadcio'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='data_de_publicacao',
            field=models.DateTimeField(blank=True, null=True, verbose_name=b'data de publica\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='descricao',
            field=models.TextField(verbose_name=b'descri\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='duracao',
            field=models.CharField(max_length=100, verbose_name=b'dura\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='endereco',
            field=models.CharField(max_length=200, verbose_name=b'endere\xc3\xa7o'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='nome',
            field=models.CharField(max_length=100, validators=[django.core.validators.RegexValidator(message=b'Utilize somente letras, espa\xc3\xa7os e n\xc3\xbameros', regex=b'^(\\w+\\s?)+$')]),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='organizador',
            field=models.CharField(max_length=100, validators=[django.core.validators.RegexValidator(message=b'Utilize somente letras, espa\xc3\xa7os e n\xc3\xbameros', regex=b'^(\\w+\\s?)+$')]),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='preco',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=6, verbose_name=b'pre\xc3\xa7o'),
        ),
        migrations.AlterField(
            model_name='consultoria',
            name='telefone',
            field=models.CharField(blank=True, max_length=13, validators=[django.core.validators.RegexValidator(message=b'Informe um telefone v\xc3\xa1lido. Ex: 99 99999-9999', regex=b'^\\d{2}\\s\\d{5}-\\d{4}$')]),
        ),
        migrations.AlterField(
            model_name='curso',
            name='cep',
            field=models.CharField(max_length=9, validators=[django.core.validators.RegexValidator(message=b'Digite um CEP v\xc3\xa1lido. Ex: 99999-999', regex=b'^\\d{5}-\\d{3}$')], verbose_name=b'CEP'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='data_de_criacao',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name=b'data de cria\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='data_de_inicio',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'data de in\xc3\xadcio'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='data_de_publicacao',
            field=models.DateTimeField(blank=True, null=True, verbose_name=b'data de publica\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='descricao',
            field=models.TextField(verbose_name=b'descri\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='duracao',
            field=models.CharField(max_length=100, verbose_name=b'dura\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='endereco',
            field=models.CharField(max_length=200, verbose_name=b'endere\xc3\xa7o'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='nome',
            field=models.CharField(max_length=100, validators=[django.core.validators.RegexValidator(message=b'Utilize somente letras, espa\xc3\xa7os e n\xc3\xbameros', regex=b'^(\\w+\\s?)+$')]),
        ),
        migrations.AlterField(
            model_name='curso',
            name='organizador',
            field=models.CharField(max_length=100, validators=[django.core.validators.RegexValidator(message=b'Utilize somente letras, espa\xc3\xa7os e n\xc3\xbameros', regex=b'^(\\w+\\s?)+$')]),
        ),
        migrations.AlterField(
            model_name='curso',
            name='preco',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=6, verbose_name=b'pre\xc3\xa7o'),
        ),
        migrations.AlterField(
            model_name='curso',
            name='telefone',
            field=models.CharField(blank=True, max_length=13, validators=[django.core.validators.RegexValidator(message=b'Informe um telefone v\xc3\xa1lido. Ex: 99 99999-9999', regex=b'^\\d{2}\\s\\d{5}-\\d{4}$')]),
        ),
        migrations.AlterField(
            model_name='evento',
            name='descricao',
            field=models.TextField(verbose_name=b'descri\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='evento',
            name='organizador',
            field=models.CharField(max_length=100, validators=[django.core.validators.RegexValidator(message=b'Utilize somente letras, espa\xc3\xa7os e n\xc3\xbameros', regex=b'^(\\w+\\s?)+$')]),
        ),
        migrations.AlterField(
            model_name='evento',
            name='telefone',
            field=models.CharField(blank=True, max_length=13, validators=[django.core.validators.RegexValidator(message=b'Informe um telefone v\xc3\xa1lido. Ex: 99 99999-9999', regex=b'^\\d{2}\\s\\d{5}-\\d{4}$')]),
        ),
        migrations.AlterField(
            model_name='parceiro',
            name='position',
            field=geoposition.fields.GeopositionField(default=b'-3.75572,-38.517394', max_length=42),
        ),
        migrations.AlterField(
            model_name='post',
            name='data_de_publicacao',
            field=models.DateTimeField(blank=True, null=True, verbose_name=b'data de publica\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='post',
            name='date_de_criacao',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name=b'data de cria\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='post',
            name='tag',
            field=models.BooleanField(default=False, verbose_name=b'\xc3\xa9 um evento?'),
        ),
        migrations.AlterField(
            model_name='post',
            name='titulo',
            field=models.CharField(max_length=200, verbose_name=b't\xc3\xadtulo'),
        ),
    ]
