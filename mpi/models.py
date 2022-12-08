from django.db import models
from . users import User

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


    def _str_(self):
        return self.unique_id


    #calcule le pourcentage de la lettre contenu dans un mot
    def pourcent(mot1):
        l1 = len(mot1)
        p = (1/l1)*100
        return p


    #donne le pourcentage de matching d'un mot dans une liste et retourne l'objet qui a le % le plus élevé
    def commin(self, lst):
        mot1 = self.nom
        l1 = len(mot1)
        for el in lst:
            if el in mot1:
                l2 = len(el)

                if l2 > l1:
                    pourcentage = 0
                    s = 0
                    for lettre in el:
                        if lettre in mot1:
                            s = self.pourcent(el)
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
                            s = self.pourcent(mot1)
                            s = s + s
                            if s > pourcentage:

                                pourcentage = s
                            else:
                                pourcentage = pourcentage
                    return pourcentage


    #recherche le numéro de cni d'un nouveau patient dans la base de donnée et retourne true ou false
    def rechercher_cni(self, list_patient):
        for i in list_patient:
            if (i == self.cni):
                return True
            else:
                return False


    #fonction qui génere l'unique ID à partir des infos rentré dans le formulaire
    def generate_unique_id(self):

        if (self.sexe == "F"):
            if (self.etranger == 'oui'):
                s = 1
            else:
                s = 3
                self.region = 99
        elif (self.sexe == "M"):
            if (self.etranger == 'non'):
                s = 2
            else:
                s = 4
                self.region = 99

        else:
            return "error sex"

        jour = int(self.date.day)
        mois = int(self.date.month)
        annee = int(self.date.year)
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
            self.region = str(self.region)

        if (1 < mois < 9):
            mois = str(mois)
            mois = "0"+mois
        else:
            mois = str(mois)
            mois = str(mois)
            ch = s+jour+annee+self.region+mois+id
            ch = int(ch)

        # verification de l'unicité de la clé
        r1 = ch % 97
        key = 97-r1
    # key=str(key)
        if ((ch+key) % 97 == 0):
            ch = str(ch)
            key = str(key)
            self.unique_id = ch + "-" + key

            return self.unique_id


    #recupere l'unique ID d'un patient à partir de son numéro de cni
    def get_unique_id(cni, list_patient):
        for i in list_patient:
            if (cni == i.cni):
                return i.unique_id


    #fonction d'enregistrement d'un patient
    def save_patient(self, list_patient):
        if (self.cni == ""):
            for i in list_patient:
                p = self.commin(self.nom, i.nom)
                if (p < 90):
                    # enregistrement en bd
                    return self.generate_unique_id(self.date_naiss, self.sexe, self.region, self.etranger)
                elif (p > 90):
                    if (self.telephone == i.telephone):
                        # le patient existe deja
                        return i.unique_id
                    else:
                        # enregistrement dans la bd secondaire
                        return "id_temporel"
                elif (p == 100):
                    # l'utilisateur existe déja
                    return i.unique_id

        else:
            if (self.rechercher_cni(self.cni) == False):
                # insérer dans la bd directement
                return self.generate_unique_id(self.date_naiss, self.sexe, self.region, self.etranger)
            else:
                # personne identique ou déja en BD
                return self.get_unique_id(self.cni)


    # recherche un patient dans une liste et retoun
    def research_patient(chaine, lts):
        for element in lts:
            if chaine in element:
                return element

