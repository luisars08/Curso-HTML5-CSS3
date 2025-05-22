
function ejecuta(){

    document.querySelector("#principal p:last-child").onclick=saludo;

}

function saludo() {

    alert("Que hay de nuevo 1.0 ");
    
}

window.onload=ejecuta;