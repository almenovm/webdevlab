# Generated by Django 3.0.4 on 2020-04-26 11:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20200331_2256'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(default='def', on_delete=django.db.models.deletion.CASCADE, to='core.Category'),
            preserve_default=False,
        ),
    ]