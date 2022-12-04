# Generated by Django 4.1.3 on 2022-12-04 02:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mpi', '0004_alter_patient_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patient',
            name='NUI',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='alergies',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='autre_nationalite',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='biometrie',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='casier',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='categorie_socioprofessionnal',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='descendants',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='fixe',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='groupe_sanguin',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='lieu_naiss',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='marque',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='mobile',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='nationalite_origine',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='nom_marital',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='num_CNI',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='num_CNPS',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='num_actenais',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='num_passeport',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='numero_permis',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='parents',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='pathologies',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='prenom',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='pseudonyme',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='religion',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='tache_naissance',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='titreSej',
        ),
        migrations.AddField(
            model_name='patient',
            name='cni',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='patient',
            name='contact_urgence',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='patient',
            name='passport',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='patient',
            name='unique_id',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='patient',
            name='village',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='patient',
            name='date_naiss',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
