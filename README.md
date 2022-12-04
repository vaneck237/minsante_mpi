**installation et déploiement en local**
- clone a git repository: https://github.com/vaneck237/minsante_mpi.git
- installer la version 3 de python: voir tutoriel
- créer l'environnement virtuel: python -m venv env
- activer l'environnement virtuel avec la commande: ./venv/Scripts/activate
- installer le framwork django: pip install django
- créer une base de donnée locale mysql (voir partie base de donnée)
-faire la migration à l'aide de la commande: python manage.py migrate
- démarrer le serveur avec la commande: python manage.py runserver
//le serveur est lancé vous pouvez commencé les modifications

**important**
chacun est appelé à créer sa branche à partir de la branche develop


**base de donnée**
- installer wamp ou xamp pour le serveur local
- creer une base de donnée mySQL à l'aide de phpmyadmin (mpiDB)
