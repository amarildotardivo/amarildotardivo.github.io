function textoDinamico(){
    let texto = document.getElementById('texto').value

    document.getElementById('dinamico').innerHTML = texto
}

function eventoAddItens(){
    let texto = document.getElementById('textoMenu').value
    let menu = document.getElementById('menu').innerHTML

    menu += "<li>" + texto + "</li>"

    document.getElementById('menu').innerHTML = menu

}

function acendeLampada(){
    //let lamp = document.getElementById('lamp').innerHTML
    
    document.getElementById('lamp').innerHTML = "<img src='img/lampada_on.gif' id = 'lampOn' />"
        
    
}

function esconde(obj) {
    var bloco = document.getElementById("bloco");
    var bloco2 = document.getElementById("bloco2");
    var bloco3 = document.getElementById("bloco3");
    
    if(obj.id == "primeiroBloco"){
        if (bloco.style.display === "none") {
          bloco.style.display = "block";
        } else {
          bloco.style.display = "none";
        }
    }

    if(obj.id == "segundoBloco"){
        if (bloco2.style.display === "none") {
          bloco2.style.display = "block";
        } else {
          bloco2.style.display = "none";
        }
    }

    if(obj.id == "terceiroBloco"){
        if (bloco3.style.display === "none") {
          bloco3.style.display = "block";
        } else {
          bloco3.style.display = "none";
        }
    }

  }