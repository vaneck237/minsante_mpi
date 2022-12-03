<?php


    // Definition des variables de traitement
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $id = $_POST['id'];

    // echo "<script>console.log($nom)</script>";
    //donnees de la photo 
    if(isset($_FILES['image'])){

        $img_tmp = $_FILES["image"]["tmp_name"];
        $img_name = $_FILES["image"]["name"];
        $img_size = $_FILES["image"]["size"];
        $img_type = $_FILES["image"]["type"];
        // echo 'name  : ' . $img_name . '| size :' . $img_size . '| type :' . $img_type . ' | temp nom : ' . $img_tmp ; 
    

        // $img_final = addslashes(fread(fopen($img_tmp,"r"),$img_size));  /*Deuxieme methode d'ajout de photo */

        try{

            if ($img_name != "")
                $img_final = addslashes(file_get_contents ($img_tmp));
            else{
                $img_final = null;
                echo "<script>alert('Pour des raisons de droit de lecture , votre photo n\'a pas pu etre ajoute');</script>";
            }
        }
        catch(SQLException $e){
            echo $e->getMessage();
            echo "<script>alert('Une erreur s'est produite')</script>";
        }
        
        if ( $nom != "" && $prenom !="" && $phone !="" && $mail !=""){

            //Ouverture d'une connexion  a la BD
            ///variables de connexion
            $host="localhost";
            $user="root";
            $pass="";
            $base = "annuaireET";
            $dsn = "mysql:host=$host;dbname=$base";

            try{

                $idcom_aj = new PDO($dsn , $user , $pass);
            }
            catch(PDOException $except){
                echo "Echec de la connexion " , $except->getMessage();
                return FALSE;
                exit();
            }
            //FIN Ouverture d'une connexion  a la BD
            
            try{

            /*autre methode d'insertion dans une base de donnees Mysql*/
            // $requete = "INSERT INTO contact(" .
            // "id , nom , prenom , numTel , email , photo " .
            // ") VALUES (".
            //     "'" . $id ."', " .
            //     "'" . $nom ."', " .
            //     "'" . $prenom ."', " .
            //     "'" . $phone ."', " .
            //     "'" . $mail ."', " .
            //     "'" . $img_final . "') ";
            
            $requete = "UPDATE `contact` SET `nom` = '$nom', `prenom` = '$prenom', `numTel` = '$phone', `email` = '$mail',`photo` = '$img_final' , `photo_type` = '$img_type' WHERE `contact`.`id` = '$id'";

                $idcom_aj->query($requete);
                $idcom_aj = NULL;

                echo "<script>setTimeout(function(){".
                    "document.location = 'index.php' ;} , 1000); ".
                "alert('Modification OK'); </script>";
            }
            catch(PDOException $except){
                echo 'Erreur Insertion ' , $except->getMessage();
            }
            
        }
        else{
            // echo 'Erreur de Remplissage des Champs';
            echo "<script>setTimeout(function(){" .
                "document.location = 'index.php' ;} , 1000); " .
                "alert('Probleme Lors de La Modification); </script>";
        }
    }
    else
        echo 'An Error Occured When Trying to Get Image';
