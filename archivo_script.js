
function ejecuta(){

    for (var i=0; i<2; i++){

        var z = document.getElementsByClassName("importante")[i].onclick=saludo;

    }

}

function saludo() {

    alert("Que hay de nuevo");
    
}

window.onload=ejecuta;