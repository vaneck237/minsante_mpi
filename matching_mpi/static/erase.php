<?php


    // Definition des variables de traitement
    $id = $_GET['id'];

    // echo "<script>console.log($nom)</script>";
        
        if ( $id != ""){

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
                

                $requete = "DELETE FROM `contact` WHERE `contact`.`id`  = '$id'";

                $idcom_aj->query($requete);
                $idcom_aj = NULL;

            }
            catch(PDOException $except){
                echo 'Erreur Suppression ' , $except->getMessage();
            }
            
        }
        else{
            echo 'Erreur de Remplissage des Champs';
        }

