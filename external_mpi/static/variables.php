<?php

include( 'JSON/JSON.php');

class personne
{
    private $nom;
    private $prenom;
    private $telephone;
    private $email;
    private $photo_type;
    private $photo_base64;

    public function getPersonne()
    {
        return array("nom" => $this->nom, "prenom" => $this->prenom, "telephone" => $this->telephone, "email" => $this->email, "photo_type" => $this->photo_type, "photo_base64" => $this->photo_base64);
    }

    public function setPersonne($nom, $prenom, $telephone, $email, $photo_type, $photo_base64)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->telephone = $telephone;
        $this->email = $email;
        $this->photo_type = $photo_type;
        $this->photo_base64 = $photo_base64;
    }
}

    $membre = new personne();
    $membre1 = new personne();

    $membre->setPersonne('hares', 'leon', '4646544', 'khsdkfhqds', 'dflksdql', 'qsdffqsdf');
    $membre1->setPersonne('jean', 'dedieu', '4646544', 'khsdkfhqds', 'dflksdql', 'qsdffqsdf');
    $tab = $membre->getPersonne();
    $tableau = array();
    array_push($tableau,$membre->getPersonne(),$membre1->getPersonne());

    echo $tableau[1]['nom'];

    $y = array('bonjour', 'le monde');
    $json = new Services_JSON();
    $output = $json->encode($tableau);
    // echo $y[0];
// echo 'ok';
print ($output);
?>