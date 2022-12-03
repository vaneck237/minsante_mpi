
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <span>bosdjofsjd</span>
        <span>dfùlsdlfflsùflsfùs</span>
        <span>efldùflsdfùlfùldfù,lqdgmlqgkqùldg</span>
    </div>
</body>
</html>
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
        exit();
    }
    //FIN Ouverture d'une connexion  a la BD
    try{

        //essai de lecture de la photo 
        // $id = $_POST['id'] ;
        // $id=19;
        $idn=19;
        $req = "SELECT * FROM `contact` WHERE id = '$idn'";
        
        $rep = $idcom_is->query($req);

        while($row = $rep->fetch()){
            $photo = $row['photo'];
        }
        // header('Content-type: image/jpeg');
        // $g = addslashes(base64_decode($photo));
        // echo $g;
        // echo $photo;
        // echo '<img src="data:image/jpeg;base64,'.base64_encode( $photo ).'"/>';
        echo '<img src="data:image/jpeg;base64,'.base64_encode($photo) .'" />';
    }
    catch(PDOException $except){
        echo 'Erreur Insertion ' , $except->getMessage();
    }

           
?>
