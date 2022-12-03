<?php
include('JSON/JSON.php');
// Inclusion de la fonction de connexion

//definition de la classe a utiliser
class personne
{
    private $id;
    private $nom;
    private $prenom;
    private $telephone;
    private $email;
    private $photo_type;
    private $base_64_photo;

    public function getPersonne()
    {
        return array("id" => $this->id , "nom" => $this->nom, "prenom" => $this->prenom, "telephone" => $this->telephone, "email" => $this->email, "photo_type" => $this->photo_type, "base_64_photo" => $this->base_64_photo);
    }

    public function setPersonne($id , $nom, $prenom, $telephone, $email, $photo_type, $base_64_photo)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->telephone = $telephone;
        $this->email = $email;
        $this->photo_type = $photo_type;
        $this->base_64_photo = $base_64_photo;
    }
}

//////////////////--------------->//////////
//Ouverture d'une connexion  a la BD
///variables de connexion
$host = "localhost";
$user = "root";
$pass = "";
$base = "annuaireET";
$dsn = "mysql:host=$host;dbname=$base";

try {

    $idcom_aff = new PDO($dsn, $user, $pass);
} catch (PDOException $except) {
    echo "Echec de la connexion ", $except->getMessage();
    return FALSE;
    exit();
}
//FIN Ouverture d'une connexion  a la BD

try {
    // echo "<script>console.log('oooo');</script>";

    //essai de lecture de la photo 

    $nom = $_GET['nom'];
    if($nom != "")
        $token = "%$nom%";
    else
        $token = "";

    $requete = "SELECT * FROM `contact` WHERE nom LIKE '$token' ORDER BY nom ASC , prenom ASC";

    $reponse = $idcom_aff->query($requete);

    // $resultats = $reponse->fetch();

    $j = 0;

    ///****tableau de personne */
    $tableau = array();

    /*instanciation du service JSON*/
    $json = new Services_JSON();

    while ($resultats = $reponse->fetch()) {
        $j = $j + 1;
        $id = $resultats['id'];
        $nom = $resultats['nom'];
        $prenom = $resultats['prenom'];
        $telephone = $resultats['numTel'];
        $email = $resultats['email'];
        $photo = $resultats['photo'];
        $photo_type = $resultats['photo_type'];
        $base_64_photo = base64_encode($photo);
        $test = "bimoule";


        // if ( $j == 17){

        // echo "<script type='text/javascript'>" .
        //     "add_Dynamic_Row();" .
        //     "var grandFather = document.getElementById('container-flex-begin');" .
        //     "var lastFather = grandFather.lastElementChild;" .
        //     /*a ce moment je parcours l'interieur des itx */
        //     "var it1 = lastFather.firstElementChild;" .

        //     "var it2 = it1.nextElementSibling;" .
        //     "var it3 = it2.nextElementSibling;" .
        //     "var it4 = it3.nextElementSibling;" .

        //     /*j'insere les enfant des span ie mes variables PHP defini plus haut*/
        //     "it1.firstElementChild.innerText = ' $nom ' ;" .        /*ecrire exactement de cette facon pour inserer la variable $nom dans le script*/
        //     "it2.firstElementChild.innerText = ' $prenom ' ;" .
        //     "it3.firstElementChild.innerText = ' $telephone ' ;" .
        //     "it4.firstElementChild.innerText = ' $email ' ;" .

        //     /*recuperation du parent de la photo*/
        //     "var parentImage = it4.nextElementSibling;" .

        //     /*insertion de la photo correspondante en utilisant l'id*/
        //     "var img = parentImage.firstElementChild;" .

        //     // "img.setAttribute(\"src\",\"is_uploaded_file.php?id=$id\");" .  /*appel d'un autre fichier PHP*/
        //     "img.setAttribute('src','data:$photo_type;base64,$base_64_photo');" .    /*insertion directe an utilisant base64 ***METHODE*****OPTIMALE********* code JS*/
        //     // "<img src='data:image/jpeg;base64,'".base64_encode($photo)."/>".     //code html   
        //     "</script>";

            /************************************************************* */



        $unePers = new personne();
        
        $unePers->setPersonne($id , $nom, $prenom, $telephone , $email , $photo_type, $base_64_photo);
        
        array_push($tableau, $unePers->getPersonne());
            /************************************************************ */


        // }
        $unePers = NULL ; /*liberation de la variable $unePers*/
    }
    $idcom_aff = NULL;

    /*publication des resultats ceci sera recupere en javascript*/
    $output = $json->encode($tableau);
    echo $output;
} catch (PDOException $except) {
    echo 'Erreur Requete select ', $except->getMessage();
}
