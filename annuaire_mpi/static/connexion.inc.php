<?php
    function connexion($base , $param)
    {
        // echo $param.".inc.php";
        include_once($param.".inc.php");
        //variables de connexion au serveur
        $dsn = "mysql:host=".MYHOST.";dbname=".$base;
        $user = MYUSER;
        $pass = MYPASS;
        try{
            $idcom = new PDO($dsn , $user , $pass);
            return $idcom;
        }
        catch(PDOException $except){
            echo "Echec de la connexion " , $except->getMessage();
            return FALSE;
            exit();
        }
    }
?>