var mi = ["Option", "Informatique", "Mathématiques et Informatique", "Mathématiques et Applications", "Algèbre, Analyse et Géométrie", "Economie et Mathématiques"];

var ph = ["Option", "Physique Fondamentale", "Physique – Chimie", "Physique et Mécanique", "Physique et Applications"];

var gs = ["Option", "Géosciences"];

var ch = ["Option", "Chimie – Physique", "Chimie - Biologie"];

var bch = ["Option", "Biochimie"];

var bio = ["Option", "Biologie Humaine et Santé", "Biologie Moléculaire et Cellulaire", "Biologies des organismes et des ecosystèmes"];

var filiere = ["MATHEMATIQUES ET INFORMATIQUES", "PHYSIQUE", "GEOSCIENCES", "CHIMIE", "BIOCHIMIE", "BIOLOGIE"];




////////**********************variables necessaires au modal***************** */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


////////**********************FIN variables necessaires au modal***************** */

function chargement() {

    var select = document.getElementById("filiere");

    for (var i = 0, c = filiere.length; i < c; i++) {
        var option = document.createElement("option");
        option.text = filiere[i];
        option.id = (i + 1);
        select.add(option);
    }

    var form = document.getElementById("form_1_2");
    form.style.background = "#57b846";


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

function effacer_full() {
    var select = document.getElementById("filiere");
    if (select)
        select.options[1] = "";
    var select = document.getElementById("option");
    if (select)
        select.options[1] = "";
    var select = document.getElementById("niveau");
    if (select)
        select.options[1] = "";

}

function test1() {
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

    if (choice == 0) {
        select.options.length = 0; // effacer les options du precedents select
        var option = document.createElement("option");
        option.text = "Option";
        select.add(option);
    }
    if (choice == 1) {
        select.options.length = 0; // effacer les options du precedents select
        for (var i = 0, c = mi.length; i < c; i++) {
            var option = document.createElement("option");
            option.text = mi[i];
            option.id = "opt" + i;
            select.add(option);
        }

    } else if (choice == 2) {
        select.options.length = 0; // effacer les options du precedents select
        for (var i = 0, c = ph.length; i < c; i++) {
            var option = document.createElement("option");
            option.text = ph[i];
            option.id = "opt" + i;
            select.add(option);
        }

    } else if (choice == 3) {
        select.options.length = 0; // effacer les options du precedents select
        for (var i = 0, c = gs.length; i < c; i++) {
            var option = document.createElement("option");
            option.text = gs[i];
            option.id = "opt" + i;
            select.add(option);
        }

    } else if (choice == 4) {
        select.options.length = 0; // effacer les options du precedents select
        for (var i = 0, c = ch.length; i < c; i++) {
            var option = document.createElement("option");
            option.text = ch[i];
            option.id = "opt" + i;
            select.add(option);
        }

    } else if (choice == 5) {
        select.options.length = 0; // effacer les options du precedents select
        for (var i = 0, c = bch.length; i < c; i++) {
            var option = document.createElement("option");
            option.text = bch[i];
            option.id = "opt" + i;
            select.add(option);
        }

    } else if (choice == 6) {
        select.options.length = 0; // effacer les options du precedents select
        for (var i = 0, c = bio.length; i < c; i++) {
            var option = document.createElement("option");
            option.text = bio[i];
            option.id = "opt" + i;
            select.add(option);
        }

    }

}



function retirer_el1(i) {

    var opt = document.getElementsByTagName('option')[i];
    opt.parentNode.removeChild(opt);


}

function appel() {

    var fil = document.getElementById("filiere");
    var choix = fil.selectedIndex;
    alert(choix);
}

function change_default_img() {
    var male = document.getElementById("masculin");
    var female = document.getElementById("feminin");

    /* la valeur de image dependra de l'image presente */
    if (document.getElementById("login-girl")) {
        var image = document.getElementById("login-girl");
    } else if (document.getElementById("login-boy")) {
        var image = document.getElementById("login-boy");
    }
    /*le pere notamment la div qui contient l'image */
    var div = document.getElementById("container-img1");


    if (male.checked) {

        if (image.id == "login-boy") {

        } else {
            div.removeChild(image);
            var change_img = document.createElement("img");
            change_img.src = "images/login-boy.png";
            change_img.id = "login-boy";
            change_img.style.height = '140px';
            change_img.style.width = '150px';
            change_img.style.borderRadius = '50px 14px';
            div.appendChild(change_img);

        }
    } else if (female.checked) {

        if (image.id == "login-girl") {

        } else {

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


function add_image() {

    function createThumbnail(file) {

        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {

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
            } else if (document.getElementById('login-boy')) {
                var child = document.getElementById('login-boy');
                prev.removeChild(child);
            } else {
                var child = document.getElementById('login-other');
                prev.removeChild(child);
            }
            prev.appendChild(imgElement);
        };
    }


    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'],
        fileInput = document.querySelector('#img1'),
        prev = document.querySelector('#container-img1');
    fileInput.onchange = function () {
        var file = this.files[0],
            imgType;


        imgType = file.name.split('.');
        imgType = imgType[imgType.length - 1].toLowerCase();

        if (allowedTypes.indexOf(imgType) != -1) {

            createThumbnail(file);

        }


    };
}

/*fonction prevu pour retirer le 1er element de chaque liste deroulante mais devenu obselete car une methode plus simple a ete trouve notamment #la methode display = non via la classe style a partir de js*/
function retire() {

    var liste = document.getElementById("filiere");

    var tab = [];

    for (var i = 0, c = liste.length; i < c; i++) {
        var elt = liste.options[i].innerHTML;

        tab.push(elt);
    }

    if (tab.indexOf("Filiere") != -1) {

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
    // e.preventDefault;

    var nom = document.getElementById("nom");
    if (nom)
        nom.value = "Hares";
    var prenom = document.getElementById("prenom");
    if (prenom)
        prenom.value = "Leon";
    var boy = document.getElementById("masculin");
    if (boy)
        boy.checked = true;
    var date = document.getElementById("date");
    if (date)
        date.value = "1994-11-18";
    var lieu = document.getElementById("lieu");
    if (lieu)
        lieu.value = "Douala";
    var phone = document.getElementById("phone");
    if (phone)
        phone.value = "699602351";
    var email = document.getElementById("mail");
    if (email)
        email.value = "leon.timo.3182@gmail.com";
    var niveau = document.getElementById("niveau");
    if (niveau)
        niveau.selectedIndex = 2;
    var matricule = document.getElementById("matricule");
    if (matricule)
        matricule.value = "16S68850";
    var filiere = document.getElementById("filiere");
    if (filiere)
        filiere.selectedIndex = 1;
    var select = document.getElementById("option");
    /*ajout de l option*/
    var option = document.createElement("option");
    if (select) {

        option.text = "Informatique";
        option.id = "opt1";
        select.add(option);
        /*je selectionne l'element cree*/
        select.selectedIndex = 1;
    }

    /*gestion de l'image*/

    if (document.getElementById("login-boy")) {
        var image = document.getElementById("login-boy");
    } else if (document.getElementById("login-girl")) {
        var image = document.getElementById("login-girl");
    } else if (document.getElementById("login-other")) {
        var image = document.getElementById("login-other");
    }

    /*retrait de l'image precedente si necessaire*/
    var div = document.getElementById("container-img1");
    if (div) {

        div.removeChild(image);
        var new_img = document.createElement("img");
        new_img.id = "login-other";
        new_img.style.height = '140px';
        new_img.style.width = '150px';
        new_img.style.borderRadius = '50px 14px';
        new_img.src = "images/hares.jpg";
        div.appendChild(new_img);
    }


}

(function () {
    var auto = document.getElementById("fill_in");

    auto.addEventListener('click', function (e) {
        e.preventDefault();
        remplissage_auto();
    }, true);
})();



function add_Dynamic_Row() {
    var grandFather = document.getElementById('container-flex-begin');
    var father = document.createElement("div");
    father.setAttribute("class", "liste-ligne");
    /*pour une approche facile je me propose d'utiliser les noms des classes correspondantent coe nom de variables ie itx(x=1..7)
    /*de plus it[1..4] se ressemble donc je me propose creer leur contenu en premier*/

    /*creation de it[1..4]*/
    var spIt1 = document.createElement('span');
    spIt1.setAttribute("class", "item-liste");
    var it1 = document.createElement("div");
    it1.setAttribute("class", "liste-item it1");

    var spIt2 = document.createElement('span');
    spIt2.setAttribute("class", "item-liste");
    var it2 = document.createElement("div");
    it2.setAttribute("class", "liste-item it2");

    var spIt3 = document.createElement('span');
    spIt3.setAttribute("class", "item-liste");
    var it3 = document.createElement("div");
    it3.setAttribute("class", "liste-item it3");

    var spIt4 = document.createElement('span');
    spIt4.setAttribute("class", "item-liste");
    var it4 = document.createElement("div");
    it4.setAttribute("class", "liste-item it4");
    /*fin creation de it[1..4]*/

    /*creation des lien entre chaque span et son parent div */
    it1.appendChild(spIt1);
    it2.appendChild(spIt2);
    it3.appendChild(spIt3);
    it4.appendChild(spIt4);
    /*creation des lien entre chaque span et son parent div */

    //  /*ajout du contenu textuel des Span */  <----------PHP
    spIt1.innerText = "Nom";
    spIt2.innerText = "Prenom";
    spIt3.innerText = "Telephone";
    spIt4.innerText = "Email";
    /*fin ajout du contenu textuel des Span */

    /*creation des it[5]*/
    var imgIt5 = document.createElement('img');
    imgIt5.setAttribute("class", "img-login-item");
    imgIt5.setAttribute("id", "login-girl");

    var it5 = document.createElement('div');
    it5.setAttribute("class", "liste-item it5");
    it5.setAttribute("id", "liste-item-photo");

    /*fin creation des it[5]*/

    //  /*Insertion image */  <--------PHP
    imgIt5.setAttribute("src", "images/login-girl.png");
    /*Fin Insertion image*/

    /*creation des lien entre chaque span et son parent div */
    it5.appendChild(imgIt5);
    /*creation des lien entre chaque span et son parent div */

    /*creation de it[6..7]*/
    var iSpIt6 = document.createElement("i");
    iSpIt6.setAttribute("class", "fa fa-edit");
    iSpIt6.setAttribute("aria-hidden", "true");
    var spIt6 = document.createElement('span');
    spIt6.setAttribute("class", "symbol-liste-item smb6");
    var it6 = document.createElement("div");
    it6.setAttribute("class", "liste-item it6");

    var iSpIt7 = document.createElement("i");
    iSpIt7.setAttribute("class", "fa fa-remove");
    iSpIt7.setAttribute("aria-hidden", "true");
    var spIt7 = document.createElement('span');
    spIt7.setAttribute("class", "symbol-liste-item smb7");
    var it7 = document.createElement("div");
    it7.setAttribute("class", "liste-item it7");

    /*Fin creation de it[6..7]*/

    /*creation des lien entre chaque span et son parent div */
    spIt6.appendChild(iSpIt6);
    it6.appendChild(spIt6);

    spIt7.appendChild(iSpIt7);
    it7.appendChild(spIt7);
    /*Fin creation des lien entre chaque span et son parent div */

    /*CREATION DES LIENS ENTRE IT[1..7] ET LEUR PARENT QUI LUI MM EST ENFANT DE GRAND PARENT*/
    father.appendChild(it1);
    father.appendChild(it2);
    father.appendChild(it3);
    father.appendChild(it4);
    father.appendChild(it5);
    father.appendChild(it6);
    father.appendChild(it7);

    grandFather.appendChild(father);
    /*FIN CREATION DES LIENS ENTRE IT[1..7] ET LEUR PARENT QUI LUI MM EST ENFANT DE GRAND PARENT*/

}


// (function(){
//     var t = document.getElementsByClassName('smb6');

//     for ( var i = 0 ; i < t.length ; i++){
//         t[i].addEventListener('click',function(e){
//             alert(e.target);
//             add_Dynamic_Row();
//         },true);
//     }
// })();


var personnes = new Array();

function pers(nom, prenom, telephone, email, photo_type, photo_base64) {
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.email = email;
    this.photo_type = photo_type;
    this.photo_base64 = photo_base64;
}

var unePers = new pers('hares', 'leon', '+23765456', 'klhklhfsdf', 'dsfjsfkjsdfsf', 'lkdfjsdkfjsdf');
var unePers1 = new pers('hares', 'leon', '+23765456', 'klhklhfsdf', 'dsfjsfkjsdfsf', 'lkdfjsdkfjsdf');

personnes.push(unePers);
// alert(personnes[0].nom);





function listeRefresh(data) {
    $.ajax({
        type: 'POST',
        url: 'affichage.php',
        timeout: 3000,
        success: function (data) {
            if (document.getElementsByClassName('liste-ligne')) {

                var lignes = document.getElementsByClassName('liste-ligne');
                if (lignes.length > 1) {

                    var parent = lignes[1].parentElement;
                    while (lignes.length > 1) {
                        parent.removeChild(parent.lastChild);
                    }
                }
            }

            // console.log(data);
            var items = JSON.parse(data); /*conversison du resultat chaine de caractere en format de donnees  JSON***/
            // console.log(items);

            /******************Construction du contenu du DOM pour tous les elements trouvés dans la BD*******/

            for (var i = 0, n = items.length; i < n; i++) {

                add_Dynamic_Row();
                var grandFather = document.getElementById('container-flex-begin');
                var lastFather = grandFather.lastElementChild;
                /*a ce moment je parcours l'interieur des itx */
                var it1 = lastFather.firstElementChild;

                var it2 = it1.nextElementSibling;
                var it3 = it2.nextElementSibling;
                var it4 = it3.nextElementSibling;

                /*j'insere les enfant des span ie mes variables PHP defini plus haut*/
                it1.firstElementChild.innerText = items[i]['nom']; /*ecrire exactement de cette facon pour inserer la variable $nom dans le script*/
                it2.firstElementChild.innerText = items[i]['prenom'];
                it3.firstElementChild.innerText = items[i]['telephone'];
                it4.firstElementChild.innerText = items[i]['email'];

                /*recuperation du parent de la photo*/
                var parentImage = it4.nextElementSibling;
                parentImage.setAttribute('id', 'liste-item-photo' + items[i]['id']);

                /*insertion de la photo correspondante en utilisant l'id*/
                var img = parentImage.firstElementChild;

                // "img.setAttribute(\"src\",\"is_uploaded_file.php?id=$id\");" .  /*appel d'un autre fichier PHP*/
                img.setAttribute('src', 'data:' + items[i]['photo_type'] + ';base64,' + items[i]['base_64_photo']); /*insertion directe an utilisant base64 ***METHODE*****OPTIMALE********* code JS*/
                img.setAttribute('id', items[i]['id']);
                // "<img src='data:image/jpeg;base64,'".base64_encode($photo)."/>".
            }
            /******************Fin Construction du contenu du DOM pour tous les elements trouvés dans la BD*******/

        },
        error: function () {
            alert("une erreur s'est prosuite");
        }
    });
}


/*Affichage de la liste au chargement de la page et a partir du bouton refresh*/
$(function () {

    if (document.getElementsByClassName('wrap-liste')[0])
        listeRefresh();

    $('#liste-refresh').click(function () {
        // alert('ok');
        setTimeout(function(){
            document.getElementById('liste-refresh').firstElementChild.setAttribute('class','fa fa-refresh');
            listeRefresh();
        },2000);
        this.firstElementChild.setAttribute('class','fa fa-spinner fa-spin');
    });

});

// alert('ok');
/*Fin Affichage de la liste au chargement de la page et a partir du bouton refresh*/



// (function(){
//     var t = document.getElementById('submitForm');
//     t.addEventListener('click',function(e){
//     e.preventDefault();
//     alert('ok');
//     var nom = document.forms['registerContacts'].elements['nom'].value;
//     var prenom = document.forms['registerContacts'].elements['prenom'].value;
//     var phone = document.forms['registerContacts'].elements['phone'].value;
//     var mail = document.forms['registerContacts'].elements['mail'].value;
//     console.log('nom = ' + nom + '& prenom = ' + prenom + '& phone = ' + phone + '& mail = ' + mail);
//     var xhr = new XMLHttpRequest();

//        xhr.open('POST', 'ajout.php');
//        xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
//        xhr.send('nom = ' + nom + ' & prenom = ' + prenom + ' & phone = ' + phone + ' & mail = ' + mail);
//        console.log(xhr.response);

//        xhr.onreadystatechange = function () {
//            if (xhr.readyState == 4 && xhr.status == 200) {
//                alert('succes hhihioi');
//            }
//        };
//     },true);
// })();


// ($(function test(){
//     alert('ok');
// }))();

// // test();

// $(function () {

//     $('#submitForm').click(function (e) {

//         // alert('ok');
//         e.preventDefault();
//         var nom = document.forms['registerContacts'].elements['nom'].value;
//         var prenom = document.forms['registerContacts'].elements['prenom'].value;
//         var phone = document.forms['registerContacts'].elements['phone'].value;
//         var mail = document.forms['registerContacts'].elements['mail'].value;
//         // alert(nom);
//         // function listeRefresh(data) {
//             $.ajax({
//                 type: 'POST',
//                 url: 'ajout.php',
//                 timeout: 3000,
//                 data: 'nom = ' + nom + '& prenom = ' + prenom + '& phone = ' + phone + '& mail = ' + mail,
//                 success: function (data) {
//                     alert('ok');
//                 },
//                 error: function () {
//                     alert("une erreur s'est prosuite");
//                 }
//             });
//         // }

//     });
// });

/*Affichage de la liste au chargement de la page et a partir du bouton refresh*/
$(function () {

    $('#liste-button-search').click(function () {
        // alert('ok');
        var nom = document.getElementById('item-find').value;
        nom = nom.trim();
        var searchIcon = document.getElementById('liste-button-search');
         searchIcon.firstElementChild.setAttribute('class', 'fa fa-spinner fa-spin');
         setTimeout(function () {
             searchIcon.firstElementChild.setAttribute('class', 'fa fa-search fa-xs');
             listeSearch(nom);
         }, 3000)
        // alert(nom);
    });

});

function listeSearch(nom) {
    // alert(nom);
    $.ajax({
        type: 'GET',
        url: 'search.php?nom=' + nom,
        timeout: 3000,
        success: function (data) {
            if (document.getElementsByClassName('liste-ligne')) {

                var lignes = document.getElementsByClassName('liste-ligne');
                if (lignes.length > 1) {

                    var parent = lignes[1].parentElement;
                    while (lignes.length > 1) {
                        parent.removeChild(parent.lastChild);
                    }
                }
            }

            // console.log(data);
            var items = JSON.parse(data); /*conversison du resultat chaine de caractere en format de donnees  JSON***/
            // console.log(items);

            /******************Construction du contenu du DOM pour tous les elements trouvés dans la BD*******/

            for (var i = 0, n = items.length; i < n; i++) {

                add_Dynamic_Row();
                var grandFather = document.getElementById('container-flex-begin');
                var lastFather = grandFather.lastElementChild;
                /*a ce moment je parcours l'interieur des itx */
                var it1 = lastFather.firstElementChild;

                var it2 = it1.nextElementSibling;
                var it3 = it2.nextElementSibling;
                var it4 = it3.nextElementSibling;

                /*j'insere les enfant des span ie mes variables PHP defini plus haut*/
                it1.firstElementChild.innerText = items[i]['nom']; /*ecrire exactement de cette facon pour inserer la variable $nom dans le script*/
                it2.firstElementChild.innerText = items[i]['prenom'];
                it3.firstElementChild.innerText = items[i]['telephone'];
                it4.firstElementChild.innerText = items[i]['email'];

                /*recuperation du parent de la photo*/
                var parentImage = it4.nextElementSibling;
                parentImage.setAttribute('id', 'liste-item-photo' + items[i]['id']);

                /*insertion de la photo correspondante en utilisant l'id*/
                var img = parentImage.firstElementChild;

                // "img.setAttribute(\"src\",\"is_uploaded_file.php?id=$id\");" .  /*appel d'un autre fichier PHP*/
                img.setAttribute('src', 'data:' + items[i]['photo_type'] + ';base64,' + items[i]['base_64_photo']); /*insertion directe an utilisant base64 ***METHODE*****OPTIMALE********* code JS*/
                img.setAttribute('id', items[i]['id']);
                // "<img src='data:image/jpeg;base64,'".base64_encode($photo)."/>".
            }
            /******************Fin Construction du contenu du DOM pour tous les elements trouvés dans la BD*******/
            dynamicF();
        },
        error: function () {
            alert("une erreur s'est prosuite");
        }
    });
}




// (function(){
//     var t = document.getElementById('liste-button-search');
//     t.addEventListener('click',function(e){
//     e.preventDefault();
//     var nom = document.getElementById('item-find').value;
//     var xhr = new XMLHttpRequest();

//        xhr.open('GET', 'search.php?nom='+nom);
//        console.log(xhr.responseText);

//        xhr.onreadystatechange = function () {
//            if (xhr.readyState == 4 && xhr.status == 200) {
//                alert('succes hhihioi');
//                if (document.getElementsByClassName('liste-ligne')) {

//                    var lignes = document.getElementsByClassName('liste-ligne');
//                    if (lignes.length > 1) {

//                        var parent = lignes[1].parentElement;
//                        while (lignes.length > 1) {
//                            parent.removeChild(parent.lastChild);
//                        }
//                    }
//                }
//                var items = JSON.parse(xhr.responseText); /*conversison du resultat chaine de caractere en format de donnees  JSON***/
//                // console.log(items);

//                /******************Construction du contenu du DOM pour tous les elements trouvés dans la BD*******/
               
//                for (var i = 0, n = items.length; i < n; i++) {

//                    add_Dynamic_Row();
//                    var grandFather = document.getElementById('container-flex-begin');
//                    var lastFather = grandFather.lastElementChild;
//                    /*a ce moment je parcours l'interieur des itx */
//                    var it1 = lastFather.firstElementChild;

//                    var it2 = it1.nextElementSibling;
//                    var it3 = it2.nextElementSibling;
//                    var it4 = it3.nextElementSibling;

//                    /*j'insere les enfant des span ie mes variables PHP defini plus haut*/
//                    it1.firstElementChild.innerText = items[i]['nom']; /*ecrire exactement de cette facon pour inserer la variable $nom dans le script*/
//                    it2.firstElementChild.innerText = items[i]['prenom'];
//                    it3.firstElementChild.innerText = items[i]['telephone'];
//                    it4.firstElementChild.innerText = items[i]['email'];

//                    /*recuperation du parent de la photo*/
//                    var parentImage = it4.nextElementSibling;
//                    parentImage.setAttribute('id', 'liste-item-photo' + items[i]['id']);

//                    /*insertion de la photo correspondante en utilisant l'id*/
//                    var img = parentImage.firstElementChild;

//                    // "img.setAttribute(\"src\",\"is_uploaded_file.php?id=$id\");" .  /*appel d'un autre fichier PHP*/
//                    img.setAttribute('src', 'data:' + items[i]['photo_type'] + ';base64,' + items[i]['base_64_photo']); /*insertion directe an utilisant base64 ***METHODE*****OPTIMALE********* code JS*/
//                    img.setAttribute('id', items[i]['id']);
//                    // "<img src='data:image/jpeg;base64,'".base64_encode($photo)."/>".
//                }
//                /******************Fin Construction du contenu du DOM pour tous les elements trouvés dans la BD*******/
//            }
//            else{
//                alert("une erreur s'est prosuite");
//            }
//        };
//     },true);
// })();



function listeEraseItem(id , nom){

    var content = document.getElementById('modal-sup-mod-head');
    content.innerHTML = " Voulez vous vraiment Supprimer <b>"+nom+"</b> ?"
    modal.style.display = "block";
    // setTimeout(function(){
    //     modal.style.display = "none";
    // },3000);


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $('.choix_modal').click(function(e){
        if ( this.value =="non")
            modal.style.display = "none";
        else if (this.value == "oui"){
            /*******debut de la requete ajax***** */
            var xhr = new XMLHttpRequest();
            xhr.open('GET','erase.php?id='+id);
            xhr.send(null);
            console.log(xhr.responseText);

            xhr.onreadystatechange = function(){
                if ( xhr.readyState == 4 && xhr.status == 200){
                    var content = document.getElementById('modal-sup-mod-head');
                    /*****chargement du Contenu de requette reusiie */
                    content.innerHTML = " Supression de <b>" + nom + "</b> Reussie !"

                    /******supression des boutons******* */
                    var choix_modal_buttons = document.getElementsByClassName('choix_modal');
                    
                    for (var i = 0, n = choix_modal_buttons.length; i < n; i++) {
                        var parent = choix_modal_buttons[0].parentElement;
                        parent.removeChild(parent.lastElementChild);
                    }

                    modal.style.display = "block";
                    setTimeout(function(){
                        modal.style.display = "none";
                    },3000);

                    /*******restitition de l'etat des boutons **** */
                    var content = document.getElementById('modal-sup-mod-head');
                    var parent = content.parentElement;
                    var btn1 = document.createElement('button');
                    var btn2 = document.createElement('button');
                    var br = document.createElement('br');
                    var br1 = document.createElement('br');
                    
                    /***************insertion du contenu des bouton ***** */
                    btn1.setAttribute('class', 'choix_modal');
                    btn1.setAttribute('value', 'oui');
                    btn1.innerText = "OUI" ;
                    btn2.setAttribute('class', 'choix_modal');
                    btn2.setAttribute('value', 'non');
                    btn2.innerText = "NON" ;
                    var espace = document.createTextNode("  ");

                    setTimeout(function(){
                        // parent.appendChild(br);
                        // parent.appendChild(br1);
                        parent.appendChild(btn1);
                        parent.appendChild(espace);
                        parent.appendChild(btn2);
                    },3001)
                    /*******Fin restitition de l'etat des boutons **** */
                    var item = document.getElementById(id).parentElement.parentElement;
                        if(item)
                            item.parentElement.removeChild(item);
                }
            };
            
            /*******Fin de la requete ajax***** */
        }
    });

    


}

function listeModifyItem(id , nom , prenom , phone , mail , src_image) {

    var content = document.getElementById('modal-sup-mod-head');
    content.innerHTML = " Voulez vous vraiment Modifier <b>"+nom+"</b> ?"
    modal.style.display = "block";
    // setTimeout(function(){
    //     modal.style.display = "none";
    // },3000);


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

    $('.choix_modal').click(function(e){
        if ( this.value =="non")
            modal.style.display = "none";
        else if (this.value == "oui"){
            /*******debut de la redirection avec les donnes a modifier ***** */
            
            // $(":input[name='nom']").value = nom;
            // $(":input[name='prenom']").value = prenom;
            // $(":input[name='phone']").value = phone;
            // $(":input[name='mail']").value = mail;
            // document.getElementsByClassName['img-login'][0].src = src_image ;
            // document.location = 'index.php';
            
            
            // document.getElementById('submitForm').value = "Modifier";

            var r = document.getElementsByClassName('wrap-liste')[0];
            var parent = r.parentElement ; 
            parent.removeChild(r);
            parent.innerHTML="<div class='wrap'>"+
"<form name='registerContacts' id='myform' method='POST' action='ajout.php' enctype='multipart/form-data'>" +

        "<div class='acceuil'>" +
            "<span class='login-title'>" +
                "Student Registration" +
            "</span>" +

        "</div>" +
        "<div class='img' id='img'>" +
            "<div id='container-img1'>" +
                "<img class='img-login' id='login-girl' src='images/login-girl.png'>" +
            "</div>" +
            "<input type='hidden' name='MAX_FILE_SIZE' value='100000'>" +
            "<input id='img1' type='file' name='image' accept='image/gif' size='50' onclick='add_image();'>" +
            "<input type='button' value='choisir l'image' id='button-img' onclick='img1.click()'>" +

        "</div>" +
        "<div class='wrapper-input'>" +
            "<span class='symbol-input10'>" +
                "<i class='fa fa-edit' aria-hidden='true'></i>" +
            "</span>" +
            "<input class='input-10' type='text' name='nom' id='nom' placeholder='Nom'>" +

        "</div>" +
        "<div class='wrapper-input'>" +
            "<span class='symbol-input10'>" +
                "<i class='fa fa-edit' aria-hidden='true'></i>" +
            "</span>" +
            "<input class='input-10' type='text' name='prenom' id='prenom' placeholder='Prenom'>" +

        "</div>" +
        "<div class='wrapper-input'>" +
            "<span class='symbol-input10'>" +
                "<i class='fa fa-phone' aria-hidden='true'></i>" +
            "</span>" +
            "<input class='input-10' type='phone' name='phone' id='phone' placeholder='Telephone'>" +

        "</div>" +
        "<div class='wrapper-input'>" +
            "<span class='symbol-input10'>" +
                "<i class='fa fa-envelope' aria-hidden='true'></i>" +
            "</span>" +
            "<input class='input-10' type='email' name='mail' id='mail' placeholder='Email'>" +

        "</div>" +
        "<input class='input-10' type='hidden' name='id' id='id_val' placeholder='id'>" +
        "<!-- Insetion des lignes de modal pour la gestion des fenetres d'infos -->" +
        "<!-- <button id='myBtn'>Open Modal</button> -->" +

        "<!-- The Modal -->" +
        "<div id='myModal' class='modal'>" +

            "<!-- Modal content -->" +
            "<div class='modal-content'>" +
                "<span class='close'>&times;</span>" +
                "<p>Some text in the Modal..</p>" +
            "</div>" +

        "</div>" +
        "<!-- Fin Insetion des lignes de modal pour la gestion des fenetres d'infos -->" +

        "<div class='btn-ligne'>" +
            "<div class='form-btn btn-elt'>" +
                    "<button id='submitForm' name='envoyer' type='submit' class='buttonload'>" +
                        "<i class=''></i> Ajouter" +
                    "</button>" +

                "</div>" + 

            "<div class='reset-btn btn-elt'>" +
                "<input type='reset' value='Reinitialiser' id='reset' class='' onclick='remove_login();effacer_full();'>" +

            "</div>" +

            "<div class='form-btn btn-elt'>" +
                "<button id='fill_in' class=''>AUTO" +
                "</button>" +
            "</div>" +
        "</div>" +
        "</div>" +
    "</form>" +
"</div>";
           
            /*******Fin de la redirection avec les donnes a modifier  ***** */

            /**************redefinition des fonction de controle****** */
            (function () {
                var auto = document.getElementById("fill_in");

                auto.addEventListener('click', function (e) {
                    e.preventDefault();
                    remplissage_auto();
                }, true);
            })();
            /**************Fin redefinition des fonction de controle****** */

            document.forms['registerContacts'].elements['nom'].value = nom;
            document.forms['registerContacts'].elements['prenom'].value = prenom;
            document.forms['registerContacts'].elements['phone'].value = phone;
            document.forms['registerContacts'].elements['mail'].value = mail;
            document.forms['registerContacts'].elements['id'].value = id;
            var img = document.getElementsByClassName('img-login')[0];
            img.setAttribute('src',src_image);


            document.getElementById('submitForm').setAttribute('value', 'Modifier');
            document.getElementById('myform').setAttribute('action', 'modify.php');

            (function () {
                document.getElementById('submitForm').addEventListener('click', function (e) {
                    e.preventDefault();
                    e.target.innerHTML = "<i class=''></i> En cours ...";
                    e.target.firstElementChild.setAttribute('class', 'fa fa-circle-o-notch fa-spin');
                    setTimeout(function () {
                        e.target.firstElementChild.setAttribute('class', '');
                        e.target.innerHTML = "<i class=''></i>Ajouter";
                        document.getElementById('myform').submit();
                    }, 3000)


                })
            })();

        }
    });

    


}

(function(){
    setTimeout(function(){

        // var t = document.getElementsByClassName('smb6');

        $('.smb7').click(function(e){
            var prev = this.parentElement.previousElementSibling;
                prev = prev.previousElementSibling;
            var child = prev.firstElementChild;
            var nom = prev.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
                nom = nom + " " + prev.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            if (child.toString() == '[object HTMLImageElement]'){
                var id = child.id;
                listeEraseItem(id , nom);
            }
        });
    },2000)

    setTimeout(function(){
        $('.liste-item > .smb6').click(function(){
            
            var prev = this.parentElement.previousElementSibling;
            var child = prev.firstElementChild;
            var mail = prev.previousElementSibling.innerText;
            var phone = prev.previousElementSibling.previousElementSibling.innerText;
            var prenom = prev.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            var nom = prev.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            
            if (child.toString() == '[object HTMLImageElement]') {
                var id = child.id;
                var image_src = child.src;
                listeModifyItem(id, nom , prenom , phone , mail , image_src);
            }
            // else
                // alert('error selecting img');
        })
    },2000)
})();

/***************************test function contenant fonction anonyme */
function dynamicF(){
    (function(){
        setTimeout(function(){
    
            // var t = document.getElementsByClassName('smb6');
    
            $('.smb7').click(function(e){
                var prev = this.parentElement.previousElementSibling;
                    prev = prev.previousElementSibling;
                var child = prev.firstElementChild;
                var nom = prev.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
                    nom = nom + " " + prev.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
                if (child.toString() == '[object HTMLImageElement]'){
                    var id = child.id;
                    listeEraseItem(id , nom);
                }
            });
        },2000)
    
        setTimeout(function(){
            $('.liste-item > .smb6').click(function(){
                
                var prev = this.parentElement.previousElementSibling;
                var child = prev.firstElementChild;
                var mail = prev.previousElementSibling.innerText;
                var phone = prev.previousElementSibling.previousElementSibling.innerText;
                var prenom = prev.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
                var nom = prev.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
                
                if (child.toString() == '[object HTMLImageElement]') {
                    var id = child.id;
                    var image_src = child.src;
                    listeModifyItem(id, nom , prenom , phone , mail , image_src);
                }
                // else
                    // alert('error selecting img');
            })
        },2000)
    })();
}

/****************************************************************** */

(function(){
    var btnSubmit = document.getElementById('submitForm');
    if (btnSubmit){

        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.innerHTML = "<i class=''></i> En cours ...";
             e.target.firstElementChild.setAttribute('class', 'fa fa-circle-o-notch fa-spin');
            setTimeout(function(){
                e.target.firstElementChild.setAttribute('class', '');
                e.target.innerHTML = "<i class=''></i>Ajouter";
                document.getElementById('myform').submit();
            },3000)
    
           
        })
    }
})();


(function(){

    var img_vcf = document.getElementById('img_vcf');
    if(img_vcf){
        img_vcf.addEventListener('click', function (e) {
            e.preventDefault();
            saveVCF();
            
        },true)
    }
})();


function saveFileJS(data , nom_fich , type , charset ){
    var blob = new Blob([data],{type: type + ";charset=" + charset});
    saveAs(blob , nom_fich);
}


function saveVCF(){
    var content = document.getElementById('modal-sup-mod-head');
    content.innerHTML = " Voulez vous Generer le fichier de contacts <b> ?";
    modal.style.display = "block";
    // setTimeout(function(){
    //     modal.style.display = "none";
    // },3000);


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $('.choix_modal').click(function(e){
        if ( this.value =="non")
            modal.style.display = "none";
        else if (this.value == "oui"){
            /************debut de la requete AJAX******* */
            var xhr = new XMLHttpRequest();
            xhr.open('GET','affichage.php');
            xhr.send(null);

            xhr.onreadystatechange = function(){

            if (xhr.readyState == 4 && xhr.status == 200 ){
                var data = xhr.responseText;
                // console.log(data);
                var items = JSON.parse(data);
                var vcard = "" ;
                /***********debut vcf */
                for (var i = 0, n = items.length; i < n; i++) {
                    vcard = vcard + "BEGIN:VCARD\n" +
                    "VERSION:2.1\n" +
                    "FN:" + items[i]['prenom'] + " " + items[i]['nom'] + "\n" +
                    "N:"+  items[i]['nom'] + ";" +  items[i]['prenom'] + "\n" +
                    "TEL;CELL:" +  items[i]['telephone'] + "\n" +
                    "EMAIL;INTERNET:" +  items[i]['email'] + "\n" +
                    "END:VCARD\n" ;
                }
                /***********fin vcf */
                console.log(vcard);
                /********creation du fichier*/
                var nom_fichier = "mon_vcf.vcf";
                var type = "text/vcard";
                var charset = "utf-8";

                var content = document.getElementById('modal-sup-mod-head');
                /*****chargement du Contenu de requette reussie */
                content.innerHTML = "Generation du fichier VCARD en cours ..." + 
                "<span><i class='fa fa-spinner fa-spin'></i></span>";

                /******supression des boutons******* */
                var choix_modal_buttons = document.getElementsByClassName('choix_modal');
                
                for (var i = 0, n = choix_modal_buttons.length; i < n; i++) {
                    var parent = choix_modal_buttons[0].parentElement;
                    parent.removeChild(parent.lastElementChild);
                }

                modal.style.display = "block";
                setTimeout(function(){
                    modal.style.display = "none";
                    /********sauvegarde vcf proprement dit */
                    saveFileJS(vcard , nom_fichier , type , charset);
                },3000);

                /*******restitition de l'etat des boutons **** */
                var content = document.getElementById('modal-sup-mod-head');
                var parent = content.parentElement;
                var btn1 = document.createElement('button');
                var btn2 = document.createElement('button');
                var br = document.createElement('br');
                var br1 = document.createElement('br');
                
                /***************insertion du contenu des bouton ***** */
                btn1.setAttribute('class', 'choix_modal');
                btn1.setAttribute('value', 'oui');
                btn1.innerText = "OUI" ;
                btn2.setAttribute('class', 'choix_modal');
                btn2.setAttribute('value', 'non');
                btn2.innerText = "NON" ;
                var espace = document.createTextNode("  ");

                setTimeout(function(){
                    // parent.appendChild(br);
                    // parent.appendChild(br1);
                    parent.appendChild(btn1);
                    parent.appendChild(espace);
                    parent.appendChild(btn2);
                },3001)
                /*******Fin restitition de l'etat des boutons **** */

                }
            };
            
            /*******Fin de la requete ajax***** */
        }
    });

    

}