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