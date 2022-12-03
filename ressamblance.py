def pourcent(mot1):
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
                pourcentage=pourcent(mot2)  
                pourcentage = pourcentage + pourcentage          
        return pourcentage

    else:
        pourcentage=0
        for lettre in mot2:
            if lettre in mot1:
                pourcentage=pourcent(mot) + pourcentage
    return pourcentage


mot="frhy"
mots="maugtfe"

print(commin(mot,mots))

