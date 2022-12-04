function loadFile(file){
    var xhr = new XMLHttpRequest();

    xhr.open('GET',file);

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            document.getElementById('Content-file').innerHTML = '<span>' + xhr.responseText + '</span>';
        }
        else{
            document.getElementById('Content-file').innerHTML = '<span>' + xhr.responseText + '</span>';
        }
    };

    xhr.send(null);
}

(function(){
    var inputs = document.getElementsByTagName('input');

    for (var i = 0 , n = inputs.length ; i < n ; i++){
        inputs[i].onclick = function(){
            loadFile(this.value);
        }
    }
})();

receiveMessage('voila un message venant du serveur');