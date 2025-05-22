
function ejecuta(){
    
    for (var i=0; i<4; i++){

        var elementos = document.querySelectorAll("#principal p");

        elementos[i].onclick=saludo;
    }

    /*document.querySelector("#principal p:last-child").onclick=saludo;*/

}

function saludo() {

    alert("Que hay de nuevo 2.0 ");
    
}

window.onload=ejecuta;