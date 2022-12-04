lts=["jean","pierre","ean","simo"]

def affiche(chaine,lts):
    for element in lts:
        if chaine in element:
            print(element)

affiche("ean",lts)