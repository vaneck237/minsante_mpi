def pourcent(mot1):
    l1= len(mot1)
    p=(1/l1)*100
    return p

def commin(mot1,lst):
    l1=len(mot1)
    for el in lst:
        if el in mot1:
            l2=len(el)
            print(el)
        
            
            if l2>l1:
                pourcentage=0
                s=0
                for lettre in el:
                    if lettre in mot1:
                        s=pourcent(el)  
                        s= s + s   
                        if s>pourcentage:

                            pourcentage=s    
                        else:
                            pourcentage=pourcentage  
                return pourcentage

            else:
                pourcentage=0
                s=0
                for lettre in el:
                    if lettre in mot1:
                        s = pourcent(mot)
                        s= s + s  
                        if s > pourcentage:

                            pourcentage=s    
                        else:
                            pourcentage=pourcentage  
                return pourcentage


mot=["bon","grt","tu","ugn","nvlfd","dghdjf","bfv","kjfk","ht"]
mots="bonjour"

print(commin(mots,mot))