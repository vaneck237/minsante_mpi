<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <title>Document</title>
</head>
<body>
    <button id="MyButton">Click Me!</button>
    <div id="result"></div>
    <script>
    $("#MyButton").click( function(){
    // $.post("test.php");
    save();
    });
    </script>
    <script type="text/javascript">
        function save(){
       
             $.ajax({
       
                 url : "test.php", // ça c'est la page vers laquelle ta requete ajax seras envoyé
                 data: {  // ici c'est que j'envoie sur la page
       
                     name : $IDCl.val() // donc j'envoie 'name' qui cprrespond à ce qui est dans mon input 'nom'
                 },
       
                 type: 'POST', // je l'envoie en POST
       
       
                 success: function (data) {   // si ça à marché
       
                     $('#result').html(data); // je lui dit de rafraichir ma div 'result' avec les 'data' de la page infos.php (voir page infos.php)
                 }
             });
       
       
         }
       
       
       
     </script> 
</body>
</html>
