<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="shortcut icon" href="images/icons/favicon.ico" />
    <!--===============================================================================================-->
    <!-- ===============================================================================================-->
    <!-- <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css" /> -->
    <!--=============================================================================================== -->
    <!--===============================================================================================-->
    <link rel="stylesheet" href="style/style.css">
    <!--===============================================================================================-->
</head>

<body>
    <div class="wrap">
        <form name="registerContacts" id="myform" method="POST" action="ajout.php" enctype="multipart/form-data">

            <div class="acceuil">
                <span class="login-title">
                    Student Registration
                </span>

            </div>
            <div class="img" id="img">
                <div id="container-img1">
                    <img class="img-login" id="login-girl" src="images/login-girl.png">
                </div>
                <input type="hidden" name="MAX_FILE_SIZE" value="100000">
                <input id="img1" type="file" name="image" accept="image/gif" size="50" onclick="add_image();">
                <input type="button" value="choisir l'image" id="button-img" onclick="img1.click()">

            </div>
            <div class="wrapper-input">
                <span class="symbol-input10">
                    <i class="fa fa-edit" aria-hidden="true"></i>
                </span>
                <input class="input-10" type="text" name="nom" id="nom" placeholder="Nom">

            </div>
            <div class="wrapper-input">
                <span class="symbol-input10">
                    <i class="fa fa-edit" aria-hidden="true"></i>
                </span>
                <input class="input-10" type="text" name="prenom" id="prenom" placeholder="Prenom">

            </div>
            <div class="wrapper-input">
                <span class="symbol-input10">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
                <input class="input-10" type="phone" name="phone" id="phone" placeholder="Telephone">

            </div>
            <div class="wrapper-input">
                <span class="symbol-input10">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input class="input-10" type="email" name="mail" id="mail" placeholder="Email">

            </div>

            <!-- Input charge de conserver l'id a envoyer pour la requete -->
            <input class="input-10" type="hidden" name="id" id="id_val" placeholder="id">

            <!-- Insetion des lignes de modal pour la gestion des fenetres d'infos -->
            <!-- <button id="myBtn">Open Modal</button> -->

            <!-- The Modal -->
            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
            <!-- Fin Insetion des lignes de modal pour la gestion des fenetres d'infos -->

            <div class="btn-ligne">
                <div class="form-btn btn-elt">
                    <!-- <input id="submitForm" name="envoyer" type="submit" value="Ajouter" class=""> -->
                    <button id="submitForm" name="envoyer" type="submit" class="buttonload">
                        <i class=""></i> Ajouter
                        <!-- <i class="fa fa-circle-o-notch fa-spin"></i> Ajouter -->
                    </button>

                </div>

                <div class="reset-btn btn-elt">
                    <input type="reset" value="Reinitialiser" id="reset" class="" onclick="remove_login();effacer_full();">

                </div>

                <div class="form-btn btn-elt">
                    <button id="fill_in" class="">AUTO
                    </button>
                </div>
                <div class="btn-ligne">
                    <div class="form-btn btn-elt view_student">
                        <button id="fill_in" class="" onclick="document.location='liste.php';return false;">CONSULTER LA LISTE
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>


    <!--===============================================================================================-->
    <script type="text/javascript" src="lib/jquery-3.4.1.js"></script>
    <!--===============================================================================================-->
    <!--===============================================================================================-->
    <script language="javascript" type="text/javascript" src="lib/modal.js"></script>
    <!--===============================================================================================-->
    <!--===============================================================================================-->
    <script language="javascript" type="text/javascript" src="lib/script.js"></script>
    <!--===============================================================================================-->
</body>

</html>