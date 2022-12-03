lst = ['pierre','jean','58','apple','coffee','coffee']

def rechercher_p(lis, chaine):
    for i in lst:
        if (i==chaine):
            return True
        else:
            return False




print(rechercher_p(lst,"pie"))
