# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-03-15 21:17
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paginas', '0004_merge_20171016_1902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contato',
            name='nome',
            field=models.CharField(default=b'Meu contato', editable=False, max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='contato',
            name='telefone',
            field=models.CharField(max_length=13, validators=[django.core.validators.RegexValidator(message=b'Informe um celular v\xc3\xa1lido. Ex: 99 99999-9999', regex=b'^\\d{2}\\s\\d{5}-\\d{4}$')], verbose_name=b'celular'),
        ),
    ]
