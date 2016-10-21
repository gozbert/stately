# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-21 02:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('stately', '0019_allow_actor_email_nullable'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignment',
            name='assigned_dt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]