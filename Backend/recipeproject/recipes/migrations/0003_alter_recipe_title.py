# Generated by Django 5.1 on 2024-08-23 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_alter_recipe_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
