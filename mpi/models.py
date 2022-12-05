from django.db import models

# Create your models here.


class Patient(models.Model):
    nom = models.CharField(max_length=100, blank=True)
    date_naiss = models.CharField(max_length=100, blank=True)
    sexe = models.CharField(max_length=1, blank=True)
    email = models.CharField(max_length=50, blank=True)
    cni = models.CharField(max_length=20, blank=True)
    passport = models.CharField(max_length=20, blank=True)
    region_origine = models.CharField(max_length=30, blank=True)
    commune_naissance = models.CharField(max_length=30, blank=True)
    adresse = models.CharField(max_length=100, blank=True)
    telephone = models.CharField(max_length=20, blank=True)
    statut_marital = models.CharField(max_length=10, blank=True)
    fonction = models.CharField(max_length=40, blank=True)
    unique_id = models.CharField(max_length=100, blank=True)
    contact_urgence = models.CharField(max_length=100, blank=True)
    village = models.CharField(max_length=100, blank=True)
    etranger = models.CharField(max_length=10, blank=True)

    list_patient = ['pierre', 'jean', '58', 'apple', 'coffee', 'coffee']
    mot = ["bon", "grt", "tu", "ugn", "nvlfd", "dghdjf", "bfv", "kjfk", "ht"]
    mots = "bonjour"

    #calcule le pourcentage de la lettre contenu dans un mot
    def pourcent(mot1):
        l1 = len(mot1)
        p = (1/l1)*100
        return p


    #donne le pourcentage de matching d'un mot dans une liste et retourne l'objet qui a le % le plus élevé
    def commin(mot1, lst):
        l1 = len(mot1)
        for el in lst:
            if el in mot1:
                l2 = len(el)
                print(el)

                if l2 > l1:
                    pourcentage = 0
                    s = 0
                    for lettre in el:
                        if lettre in mot1:
                            s = pourcent(el)
                            s = s + s
                            if s > pourcentage:

                                pourcentage = s
                            else:
                                pourcentage = pourcentage
                    return pourcentage

                else:
                    pourcentage = 0
                    s = 0
                    for lettre in el:
                        if lettre in mot1:
                            s = pourcent(mot)
                            s = s + s
                            if s > pourcentage:

                                pourcentage = s
                            else:
                                pourcentage = pourcentage
                    return pourcentage

    #recherche le numéro de cni d'un nouveau patient dans la base de donnée et retourne true ou false
    def rechercher_cni(list_patient, cni):
        for i in list_patient:
            if (i == cni):
                return True
            else:
                return False

    #fonction qui génere l'unique ID à partir des infos rentré dans le formulaire
    def generate_unique_id(date, sexe, region, etranger):

        if (sexe == "F"):
            if (etranger == 'oui'):
                s = 1
            else:
                s = 3
                region = 99
        elif (sexe == "M"):
            if (etranger == 'non'):
                s = 2
            else:
                s = 4
                region = 99

        else:
            return "error sex"

        jour = int(date.day)
        mois = int(date.month)
        annee = int(date.year)
        # ici on recupere les donnees dans la bd (master_patient_index), et on incremente les 4 dennier champs
        nombre = 0
        nombre += 1
        id = str(nombre)
        id = id.zfill(4)
        s = str(s)
        if (1 < jour < 9):
            jour = str(jour)
            jour = "0"+jour
        else:
            jour = str(jour)
            annee = str(annee)
            annee = annee[2:]
            region = str(region)

        if (1 < mois < 9):
            mois = str(mois)
            mois = "0"+mois
        else:
            mois = str(mois)
            mois = str(mois)
            ch = s+jour+annee+region+mois+id
            ch = int(ch)

        # verification de l'unicité de la clé
        r1 = ch % 97
        key = 97-r1
    # key=str(key)
        if ((ch+key) % 97 == 0):
            ch = str(ch)
            key = str(key)
            unique_id = ch + "-" + key

            return unique_id

    #recupere l'unique ID d'un patient à partir de son numéro de cni
    def get_unique_id(cni, list_patient):
        for i in list_patient:
            if (cni == i.cni):
                return i.unique_id

    #fonction d'enregistrement d'un patient
    def save_patient(nom, cni, sexe, dob, tel, region, etranger, list_patient):
        if (cni == ""):
            for i in list_patient:
                p = commin(nom, i.nom)
                if (p < 90):
                    # enregistrement en bd
                    return generate_unique_id(dob, sexe, region, etranger)
                elif (p > 90):
                    if (tel == i.mobile):
                        # le patient existe deja
                        return i.unique_id
                    else:
                        # enregistrement dans la bd secondaire
                        return "id_temporel"
                elif (p == 100):
                    # l'utilisateur existe déja
                    return i.unique_id

        else:
            if (rechercher_cni(cni) == False):
                # insérer dans la bd directement
                return generate_unique_id(dob, sexe, region, etranger)
            else:
                # personne identique ou déja en BD
                return get_unique_id(cni)

    # recherche un patient dans une liste et retoun
    def research_patient(chaine, lts):
        for element in lts:
            if chaine in element:
                return element


class User(models.Model):
    login = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=50)
