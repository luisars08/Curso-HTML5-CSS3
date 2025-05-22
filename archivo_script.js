
function ejecuta(){

    var elementos = document.querySelectorAll("#principal p");
    
    for (var i=0; i<elementos.length; i++){

        

        elementos[i].onclick=saludo;


    }



}

function saludo() {

    alert("Que hay de nuevo 2.0 ");
    
}

window.onload=ejecuta;