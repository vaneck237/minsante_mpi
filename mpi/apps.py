from django.apps import AppConfig


class MpiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mpi'
    list_patient = ['pierre','jean','58','apple','coffee','coffee']

    def rechercher_cni(list_patient, cni):
        for i in list_patient:
            if (i==cni):
                return True
            else:
                return False

    def matching(mot1):
        l1= len(mot1)
        p=(1/l1)*100
        return p

    def commin(mot1,mot2):
        l1=len(mot1)
        l2=len(mot2)
        if l2>l1:
            pourcentage=0
            for lettre in mot1:
                if lettre in mot2:
                    pourcentage=matching(mot2)  
                    pourcentage = pourcentage + pourcentage          
            return pourcentage

        else:
            pourcentage=0
            for lettre in mot2:
                if lettre in mot1:
                    pourcentage=matching(mot1) + pourcentage
        return pourcentage
    

    def generate_unique_id(date, sexe, region, etranger):

        if(sexe == "F"):
            if(etranger == 'oui'):
                s=1
            else:
                s=3
                region=99
        elif(sexe == "M"):
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

        #verification de l'unicité de la clé
        r1=ch%97
        key=97-r1
    # key=str(key)
        if((ch+key)%97==0):
            ch=str(ch)
            key=str(key)
            unique_id = ch +"-"+ key

            return unique_id


    