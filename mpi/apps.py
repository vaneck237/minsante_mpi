from django.apps import AppConfig
from datetime import date

class MpiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
<<<<<<< HEAD:minsante_patient/apps.py
    name = 'minsante_patient'

    
    def master_patient_inde(date, sexe, region, etranger):



        if(sexe == "f"):
            if(etranger == 'non'):
                s=1
            else:
                s=3
                region=99
        elif(sexe == "m"):
            if(etranger == 'non'):
                s=2
            else:
                s=4
                region=99

        else:
            return "error sex"

        jour =  int(date.day)
        mois =  int(date.month)
        annee = int(date.year)
        #ici on recupere les donnees dans la bd (master_patient_index), et on incremente les 4 dennier champs 
        nombre=0
        nombre+=1
        id=str(nombre)
        id=id.zfill(4)
        s=str(s) 
        if(1<jour<9):
            jour=str(jour)
            jour="0"+jour
        else:
            jour=str(jour)
        annee=str(annee)
        annee=annee[2:]
        region=str(region)

        if(1<mois<9):
            mois=str(mois)
            mois="0"+mois
        else:
            mois=str(mois)
        mois=str(mois)
        ch=s+jour+annee+region+mois+id
        ch=int(ch)

        r1=ch%97
        key=97-r1
    # key=str(key)
        if((ch+key)%97==0):
            ch=str(ch)
            key=str(key)
            master_patien_indexe=ch +"-"+ key

            return master_patien_indexe

        else:

            return "<br/> l'identifiant genere n'est pas correct!!!"


    # test de la fonction

    #datee=date.fromisoformat('2019-02-04')

    #sexee="f"
    #regione=18
    #etrangere="oui"



    #m=master_patient_inde(datee,sexee,regione,etrangere)
    #print(m)
=======
    name = 'mpi'



    
>>>>>>> 30511d64776126eaded1d35c53ca5d7668d6f674:mpi/apps.py
