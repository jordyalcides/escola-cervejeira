# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-08-29 22:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paginas', '0002_auto_20170829_1847'),
    ]

    operations = [
        migrations.AddField(
            model_name='contato',
            name='nome',
            field=models.CharField(default='nome', max_length=100),
            preserve_default=False,
        ),
    ]