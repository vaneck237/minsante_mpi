<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="shortcut icon" href="images/icons/favicon.ico" />
    <!--===============================================================================================-->
    <!--===============================================================================================-->
    <link rel="stylesheet" href="style/style.css">
    <!--===============================================================================================-->
</head>

<body>
    <div class="wrap-liste">
        <!-- <form action=""> -->
        <div class="acceuil-flex">
            <span class="login-title-liste">
                Students List
            </span>
            <span class="item-search-up">
                <div class="container-container-list-search">
                    <div class="container-list-search">
                        <input type="search" name="item-search" id="item-find">
                        <span id="liste-button-search" class="symbol-liste-item-search">
                            <i class="fa fa-search fa-xs" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div id="vcf">
                    <img id="img_vcf" src="images\vcf\vcf1.jpg" alt="Generer Votre VCF">
                </div>
            </span>

        </div>

        <div class="list-title-overflow">
            <div class="container-flex">
                <div class="liste-ligne">
                    <div class="liste-item it1">
                        <span class="symbol-liste-item">
                            <i class="fa fa-address-card" aria-hidden="true"></i>
                        </span>
                        <span class="item-liste-title">
                            Nom
                        </span>

                    </div>
                    <div class="liste-item it2">
                        <span class="symbol-liste-item">
                            <i class="fa fa-address-card" aria-hidden="true"></i>
                        </span>
                        <span class="item-liste-title">
                            Prenom
                        </span>

                    </div>
                    <div class="liste-item it3">
                        <span class="symbol-liste-item">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <span class="item-liste-title">
                            Telephone
                        </span>

                    </div>
                    <div class="liste-item it4">
                        <span class="symbol-liste-item">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        <span class="item-liste-title">
                            Email
                        </span>

                    </div>
                    <div class="liste-item it5" id="liste-item-photo">
                        <span class="symbol-liste-item">
                            <i class="fa fa-photo" aria-hidden="true"></i>
                        </span>
                        <span class="item-liste-title">
                            Photo
                        </span>

                    </div>
                    <div class="liste-item it6">
                        <span class="symbol-liste-item smb6" id="liste-refresh">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                        </span>
                    </div>
                    <!-- <div class="liste-item it7">
                            <span class="symbol-liste-item smb7">
                                <i class="fa fa-edit" aria-hidden="true"></i>
                            </span>
                        </div> -->
                </div>

            </div>
        </div>

        <div class="liste-item-overflow">
            <div class="container-flex" id="container-flex-begin">
                <!-- **************************LIGNE DE CONTENU************************************ -->
                <!-- Ceci est mis en Commentaire car est ajoute grace au CSS -->
                <!-- <div class="liste-ligne">
                    <div class="liste-item it1">
                        <span class="item-liste">
                            Nom
                        </span>

                    </div>
                    <div class="liste-item it2">
                        <span class="item-liste">
                            Prenom
                        </span>

                    </div>
                    <div class="liste-item it3">
                        <span class="item-liste">
                            Telephone
                        </span>

                    </div>
                    <div class="liste-item it4">
                        <span class="item-liste">
                            Email
                        </span>

                    </div>
                    <div class="liste-item it5" id="liste-item-photo">
                        <img class="img-login-item" id="login-girl" src="images/login-girl.png">
                    </div>
                    <div class="liste-item it6">
                        <span class="symbol-liste-item smb6">
                            <i class="fa fa-edit" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="liste-item it7">
                        <span class="symbol-liste-item smb7">
                            <i class="fa fa-remove" aria-hidden="true"></i>
                        </span>
                    </div>
                </div> -->
                <!-- **************************FIN DE CONTENU************************************ -->

            </div>
           
        </div>

        <div class="form-btn btn-elt add_student">
                <button id="fill_in" class="" onclick="document.location='index.php';">AJOUTER UN ETUDIANT
                </button>
            </div>
        <!-- Insetion des lignes de modal pour la gestion des fenetres d'infos -->
        <!-- <button id="myBtn">Open Modal</button> -->

        <!-- The Modal -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p id="modal-sup-mod-head">Some text in the Modal..</p>
                <br>
                <button class="choix_modal" value="oui">
                    OUI
                </button>
                <button class="choix_modal" value="non">
                    NON
                </button>
            </div>

        </div>
        <!-- Fin Insetion des lignes de modal pour la gestion des fenetres d'infos -->

        <!-- <div class="btn-ligne">
            <div class="form-btn btn-elt add_student">
                <button id="fill_in" class="" onclick="document.location='index.php';">AJOUTER UN ETUDIANT
                </button>
            </div>
        </div> -->
        <!-- </form> -->
    </div>

    <!--===============================================================================================-->
    <script type="text/javascript" src="lib/jquery-3.4.1.js"></script>
    <!--===============================================================================================-->
     <!--===============================================================================================-->
     <script type="text/javascript" src="FileSaver.js-master\src\FileSaver.js"></script>
    <!--===============================================================================================-->
    <!--===============================================================================================-->
    <script language="javascript" type="text/javascript" src="lib/script.js"></script>
    <!--===============================================================================================-->


</body>

</html>