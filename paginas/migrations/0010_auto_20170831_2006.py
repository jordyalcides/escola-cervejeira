# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-08-31 23:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paginas', '0009_auto_20170831_1802'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foto',
            name='imagem',
            field=models.ImageField(upload_to='galeria/%Y/%m/%d/'),
        ),
    ]
