# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-23 15:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20170821_1846'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.IntegerField(default=0)),
                ('place', models.CharField(max_length=200)),
                ('picture', models.ImageField(upload_to=b'')),
                ('description', models.TextField()),
                ('start_date', models.DateTimeField()),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='beer',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]