# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-17 18:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_cerveja_familia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cerveja',
            name='avaliacao',
            field=models.TextField(blank=True, null=True, verbose_name=b'avalia\xc3\xa7\xc3\xa3o'),
        ),
        migrations.AlterField(
            model_name='cerveja',
            name='familia',
            field=models.CharField(max_length=100, verbose_name=b'fam\xc3\xadlia'),
        ),
    ]
