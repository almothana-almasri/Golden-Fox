# Generated by Django 4.1.5 on 2023-09-02 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0003_alter_favourite_product_unique_together'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='name',
            new_name='owner_name',
        ),
        migrations.AddField(
            model_name='product',
            name='owner_name',
            field=models.CharField(default='Unknown', max_length=255),
        ),
    ]
