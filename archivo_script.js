
function ejecuta(){

    document.getElementsByTagName("p")[0].onclick=saludo;
    
}

function saludo() {

    alert("Que hay de nuevo");
    
}

window.onload=ejecuta;