<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>Document</title>

</head>

<body>
    <p>Veuillez choisir le type de fichier que vous voulez uploader</p>
    <input type='button' value='j.html'>
    <input type='button' value='toto.php'>

    <p id='Content-file'>
        <span>Aucun contenu n'a ete charge</span>
    </p>

    <script src='lib/xmlhttp.js'></script>
</body>

</html>


<div class='wrap'>
    <form name='registerContacts' id='myform' method='POST' action='ajout.php' enctype='multipart/form-data'>

        <div class='acceuil'>
            <span class='login-title'>
                Student Registration
            </span>

        </div>
        <div class='img' id='img'>
            <div id='container-img1'>
                <img class='img-login' id='login-girl' src='images/login-girl.png'>
            </div>
            <input type='hidden' name='MAX_FILE_SIZE' value='100000'>
            <input id='img1' type='file' name='image' accept='image/gif' size='50' onclick='add_image();'>
            <input type='button' value='choisir l'image' id='button-img' onclick='img1.click()'>

        </div>
        <div class='wrapper-input'>
            <span class='symbol-input10'>
                <i class='fa fa-edit' aria-hidden='true'></i>
            </span>
            <input class='input-10' type='text' name='nom' id='nom' placeholder='Nom'>

        </div>
        <div class='wrapper-input'>
            <span class='symbol-input10'>
                <i class='fa fa-edit' aria-hidden='true'></i>
            </span>
            <input class='input-10' type='text' name='prenom' id='prenom' placeholder='Prenom'>

        </div>
        <div class='wrapper-input'>
            <span class='symbol-input10'>
                <i class='fa fa-phone' aria-hidden='true'></i>
            </span>
            <input class='input-10' type='phone' name='phone' id='phone' placeholder='Telephone'>

        </div>
        <div class='wrapper-input'>
            <span class='symbol-input10'>
                <i class='fa fa-envelope' aria-hidden='true'></i>
            </span>
            <input class='input-10' type='email' name='mail' id='mail' placeholder='Email'>

        </div>
        <!-- Insetion des lignes de modal pour la gestion des fenetres d'infos -->
        <!-- <button id='myBtn'>Open Modal</button> -->

        <!-- The Modal -->
        <div id='myModal' class='modal'>

            <!-- Modal content -->
            <div class='modal-content'>
                <span class='close'>&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>
        <!-- Fin Insetion des lignes de modal pour la gestion des fenetres d'infos -->

        <div class='btn-ligne'>
            <div class='submit-btn btn-elt'>
                <input id='submitForm' name='envoyer' type='submit' value='Ajouter' class=''>
                <button class='buttonload' style='display:none'>
                    <i class='fa fa-circle-o-notch fa-spin'></i> Loading
                </button>

            </div>

            <div class='reset-btn btn-elt'>
                <input type='reset' value='Reinitialiser' id='reset' class='' onclick='remove_login();effacer_full();'>

            </div>

            <div class='form-btn btn-elt'>
                <button id='fill_in' class=''>AUTO
                </button>
            </div>
        </div>
    </form>
</div>