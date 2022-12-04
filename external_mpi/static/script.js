

var mi = ["","Informatique","Mathématiques et Informatique","Mathématiques et Applications","Algèbre, Analyse et Géométrie","Economie et Mathématiques"];

var ph = ["","Physique Fondamentale","Physique – Chimie","Physique et Mécanique","Physique et Applications"];

var gs = ["","Géosciences"];

var ch = ["","Chimie – Physique","Chimie - Biologie"];

var bch = ["","Biochimie"];

var bio = ["","Biologie Humaine et Santé","Biologie Moléculaire et Cellulaire","Biologies des organismes et des ecosystèmes"];

var filiere = ["MATHEMATIQUES ET INFORMATIQUES","PHYSIQUE","GEOSCIENCES","CHIMIE","BIOCHIMIE","BIOLOGIE"];

function chargement(){

	var select = document.getElementById("filiere");
	
	for ( var i = 0 , c = filiere.length ; i < c ; i++ ) {
		var option = document.createElement("option");
		option.text = filiere[i];
		option.id=(i + 1);
		select.add(option);
	}
    
    var form = document.getElementById("form_1_0");
    form.style.background="#57b846";
	
}


function effacer() {
 select.options.length = 0;
}

function effacer_full() {
	var select = document.getElementById("filiere");
	select.options[1] = "";
	var select = document.getElementById("option");
	select.options[1] = "";
	var select = document.getElementById("niveau");
	select.options[1] = "";
}

function aff_filiere() {
var select = document.getElementById("option");

var old_select = document.getElementById("filiere");
choice = old_select.selectedIndex;
valeur = old_select.options[choice].value;
texte = old_select.options[choice].text;
	
	if (choice == 0 ){
	select.options.length = 0;  // effacer les options du precedents select	
	}
	if (choice == 1 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = mi.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = mi[i];
			select.add(option);
		}

	}
	else if (choice == 2 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = ph.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = ph[i];
			select.add(option);
		}
		
	}
	else if (choice == 3 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = gs.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = gs[i];
			select.add(option);
		}
		
	}
	else if (choice == 4 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = ch.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = ch[i];
			select.add(option);
		}
		
	}
	else if (choice == 5 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = bch.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = bch[i];
			select.add(option);
		}
		
	}

	else if (choice == 6 ){
		select.options.length = 0;  // effacer les options du precedents select
		for ( var i = 0 , c = bio.length ; i < c ; i++ ) {
			var option = document.createElement("option");
			option.text = bio[i];
			select.add(option);
		}
		
	}

}

(function(){
var allowedTypes = ['png','jpg','jpeg','gif'],
fileInput = document.querySelector('#file'),
prev = document.querySelector('#prev') ;
fileInput.onchange = function(){
// Analyse des fichiers et création des prévisualisations
};
})();

fileInput.onchange = function(){
var files = this.files,
filesLen = files.length,
imgType;
for ( var i = 0 ; i < filesLen ; i++) {
imgType = files[i].name.split('.');
imgType = imgType[imgType.length - 1].toLowerCase();// On utilise toLowerCase() pour éviter les extensions en majuscules
if( allowedTypes. indexOf( imgType) != -1) {
// Le fichier est bien une image supportée, il ne reste plus qu'à l'afficher
}
}
};