function verificar(){
    var email = document.getElementById('email');

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if(!regex.test(email.value))
        return alert('Email Inválido!!!')
        
    return alert("Email Válido!!!!!")
}