lts=["jean","jean","ean","simo"]

def affiche(chaine,lts):
    for element in lts:
        if chaine in element:
            print(element)
    return element

affiche("ea",lts)