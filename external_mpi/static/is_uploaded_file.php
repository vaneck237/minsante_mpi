<?php


    // Inclusion de la fonction de connexion
    // include("connexion.inc.php");  
    // include('affichage.php');      

    // include('affichage.php');
     //Ouverture d'une connexion  a la BD
    ///variables de connexion
    $host="localhost";
    $user="root";
    $pass="";
    $base = "annuaireET";
    $dsn = "mysql:host=$host;dbname=$base";

    try{

        $idcom_is = new PDO($dsn , $user , $pass);
    }
    catch(PDOException $except){
        echo "Echec de la connexion " , $except->getMessage();
        return FALSE;
        exit();
    }
    //FIN Ouverture d'une connexion  a la BD
    try{

        //essai de lecture de la photo 
        // $id = $_POST['id'] ;
        // $id=19;
        $idn = $_GET['id'];
        // $idn=19;
        $req = "SELECT * FROM `contact` WHERE id = '$idn'";
        
        $rep = $idcom_is->query($req);

        $res = $rep->fetch();
        // echo $img_type;
        // header("Content-type : . $img_type");
        header("Content-type:image/jpeg");
        // header('Content-type: ' . $res['photo_type']);
        echo $res['photo'];

    }
    catch(PDOException $except){
        echo 'Erreur Insertion ' , $except->getMessage();
    }

           
?>