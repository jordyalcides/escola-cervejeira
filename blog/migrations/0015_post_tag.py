# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-21 13:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_auto_20170920_1352'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='tag',
            field=models.BooleanField(default=False, verbose_name='é um evento?'),
        ),
    ]