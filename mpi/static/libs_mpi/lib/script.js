

var mi = ["Option","Informatique","Mathématiques et Informatique","Mathématiques et Applications","Algèbre, Analyse et Géométrie","Economie et Mathématiques"];

var ph = ["Option","Physique Fondamentale","Physique – Chimie","Physique et Mécanique","Physique et Applications"];

var gs = ["Option","Géosciences"];

var ch = ["Option","Chimie – Physique","Chimie - Biologie"];

var bch = ["Option","Biochimie"];

var bio = ["Option","Biologie Humaine et Santé","Biologie Moléculaire et Cellulaire","Biologies des organismes et des ecosystèmes"];

var filiere = ["MATHEMATIQUES ET INFORMATIQUES","PHYSIQUE","GEOSCIENCES","CHIMIE","BIOCHIMIE","BIOLOGIE"];

function chargement(){

	var select = document.getElementById("filiere");
	
	for ( var i = 0 , c = filiere.length ; i < c ; i++ ) {
		var option = document.createElement("option");
		option.text = filiere[i];
		option.id=(i + 1);
		select.add(option);
	}
    
    var form = document.getElementById("form_1_2");
    form.style.background="#57b846";
	
    
/* je masque les choix #niveau# #filiere# et #option# pour qu'ils ne puissent etre choisi par l'utilisateur*/
    child = document.getElementById("fil");
    child.style.display = 'none';
    
    child = document.getElementById("opt");
    child.style.display = 'none';
    
    child = document.getElementById("niv");
    child.style.display = 'none';
    
}


function effacer() {
 select.options.length = 0;
}
    
function effacer_full(){
    var select = document.getElementById("filiere");
	select.options[1] = "";
	var select = document.getElementById("option");
	select.options[1] = "";
	var select = document.getElementById("niveau");
	select.options[1] = "";
    
}

function test1(){
        alert("ol");
}
    

function remove_login() {
    
    var div = document.getElementById("container-img1");
    
    /*dans le cas ou l'image a ete insere*/
    if (document.getElementById("login-other")) {
        var del_login = document.getElementById("login-other");
    }
    /*dans le cas ou l'image a ete modifie par les bouton radio*/
    else if (document.getElementById("login-boy")) {
       var del_login = document.getElementById("login-boy"); 
    }
    
    div.removeChild(del_login);
    
        var change_img = document.createElement("img");
        change_img.src = "images/login-girl.png";
        change_img.id = "login-girl";
        change_img.style.height = '140px';
        change_img.style.width = '150px';
        change_img.style.borderRadius = '50px 14px';
        div.appendChild(change_img);
    
}

function aff_filiere() {
var select = document.getElementById("option");

var old_select = document.getElementById("filiere");
choice = old_select.selectedIndex;
valeur = old_select.options[choice].value;
texte = old_select.options[choice].text;
	
	if (choice == 0 ){
	select.options.length = 0;  // effacer les options du precedents select
    var option = document.createElement("option");
    option.text = "Option";
    select.add(option);
	}
	if (choice == 1 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = mi.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = mi[i];
            option.id= "opt" + i ;
			select.add(option);
		}

	}
	else if (choice == 2 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = ph.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = ph[i];
            option.id= "opt" + i ;
			select.add(option);
		}
		
	}
	else if (choice == 3 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = gs.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = gs[i];
            option.id= "opt" + i ;
			select.add(option);
		}
		
	}
	else if (choice == 4 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = ch.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = ch[i];
            option.id= "opt" + i ;
			select.add(option);
		}
		
	}
    
   
	else if (choice == 5 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = bch.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = bch[i];
            option.id= "opt" + i ;
			select.add(option);
		}
		
	}

	else if (choice == 6 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = bio.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = bio[i];
            option.id= "opt" + i ;
			select.add(option);
		}
		
	}
    
}



 function retirer_el1(i){
     
     var opt = document.getElementsByTagName('option')[i];
     opt.parentNode.removeChild(opt);
     
     
}

function appel(){
    
    var fil = document.getElementById("filiere");
    var choix = fil.selectedIndex ;
    alert(choix);
}

function test()
{
    alert("hello");
}

function test2()
{
    alert("hello");
}

function change_default_img()
{
    var male = document.getElementById("masculin");
    var female = document.getElementById("feminin");
    
    /* la valeur de image dependra de l'image presente */
    if (document.getElementById("login-girl")) {
        var image = document.getElementById("login-girl");
    }
    else if (document.getElementById("login-boy")) {
        var image = document.getElementById("login-boy");
    }
    /*le pere notamment la div qui contient l'image */
    var div =document.getElementById("container-img1");

    
    if (male.checked){
        
        if (image.id == "login-boy") {
            
        }
        else {       
            div.removeChild(image);
            var change_img = document.createElement("img");
            change_img.src = "images/login-boy.png";
            change_img.id = "login-boy";
            change_img.style.height = '140px';
            change_img.style.width = '150px';
            change_img.style.borderRadius = '50px 14px';
            div.appendChild(change_img);
                
        }
    }
    else if (female.checked){

        if (image.id == "login-girl") {
            
        }
        else {
            
            div.removeChild(image);
            var change_img = document.createElement("img");
            
            change_img.src = "images/login-girl.png";
            change_img.id = "login-girl";
            change_img.style.height = '140px';
            change_img.style.width = '150px';
            change_img.style.borderRadius = '50px 14px';
            div.appendChild(change_img);
            
        }
    }
}


function add_image(){

            function createThumbnail(file) {
            
            var reader = new FileReader();

            reader.readAsDataURL(file);
        
            reader.onload = function() {

                var imgElement = document.createElement('img');
                imgElement.id = "login-other";
                imgElement.style.height = '140px';
                imgElement.style.width = '150px';
                imgElement.style.borderRadius = '50px 14px';
                imgElement.src = this.result;
                /*l'image que je retire depend de celle presente */
                if (document.getElementById('login-girl')) {
                    var child = document.getElementById('login-girl');
                    prev.removeChild(child);
                }
                else if (document.getElementById('login-boy')) {
                    var child = document.getElementById('login-boy');
                    prev.removeChild(child);
                }
                else {
                    var child = document.getElementById('login-other');
                    prev.removeChild(child);
                }
                prev.appendChild(imgElement);
            };
        }


            var allowedTypes = ['png' , 'jpg' , 'jpeg' , 'gif'],
                fileInput = document.querySelector('#img1'),
                prev = document.querySelector('#container-img1');
            fileInput.onchange = function() {
              var file = this.files[0],
                  imgType;

                    
                  imgType = file.name.split('.');
                  imgType = imgType[imgType.length - 1].toLowerCase();

                  if (allowedTypes.indexOf(imgType) != -1 ) {
    
                      createThumbnail(file);

                  }


            }; 
}

/*fonction prevu pour retirer le 1er element de chaque liste deroulante mais devenu obselete car une methode plus simple a ete trouve notamment #la methode display = non via la classe style a partir de js*/
function retire(){
    
    var liste = document.getElementById("filiere");
    
    var tab = [];
    
    for (var i = 0 , c = liste.length ; i < c ; i ++ ){
        var elt = liste.options[i].innerHTML;
        
        tab.push(elt);
    }
    
    if (tab.indexOf("Filiere") != -1 ){
        
        var child = document.getElementById('fil');
        liste.removeChild(child);
        
    }
    
}

function retirer_opt() {
    
    var liste = document.getElementById('option');
    /* #opt0# est l'option attribue lors de l'ajout dynamique des options*/
    var opt = document.getElementById('opt0');
//    opt.style.display = 'none';
//    var opt1 = document.getElementById('1');
    opt.style.display = 'none';
    
    
    
    
}

function remplissage_auto() {
    
    var nom = document.getElementById("nom");
    nom.value="Hares";
    var prenom = document.getElementById("prenom");
    prenom.value="Leon";
    var boy = document.getElementById("masculin");
    boy.checked=true;
    var date = document.getElementById("date");
    date.value = "1994-11-18";
    var lieu = document.getElementById("lieu");
    lieu.value = "Douala";
    var phone = document.getElementById("phone");
    phone.value="699602351";
    var email = document.getElementById("mail");
    email.value = "leon.timo.3182@gmail.com";
    var niveau = document.getElementById("niveau");
    niveau.selectedIndex = 2;
    var matricule = document.getElementById("matricule");
    matricule.value = "16S68850";
    var filiere = document.getElementById("filiere");
    filiere.selectedIndex = 1;
    var select = document.getElementById("option");
    /*ajout de l option*/
    var option = document.createElement("option");
    option.text = "Informatique";
    option.id= "opt1";
    select.add(option);
    /*je selectionne l'element cree*/
    select.selectedIndex = 1;
    
    /*gestion de l'image*/
    
    if (document.getElementById("login-boy")) {
        var image = document.getElementById("login-boy");
    }
    else if (document.getElementById("login-girl")) {
        var image = document.getElementById("login-girl");
    }
    else if (document.getElementById("login-other")) {
        var image = document.getElementById("login-other");
    }
        
    /*retrait de l'image precedente si necessaire*/
        var div = document.getElementById("container-img1");
        div.removeChild(image);
        var new_img = document.createElement("img");
        new_img.id = "login-other";
        new_img.style.height = '140px';
        new_img.style.width = '150px';
        new_img.style.borderRadius = '50px 14px';
        new_img.src = "images/hares.jpg";
        div.appendChild(new_img);
        
        
    }