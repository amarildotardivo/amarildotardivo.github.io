function verificar(){
    var numero = prompt('Entre com o número:')

    var fatorial = 1;

    if(numero < 2){
        return alert('O Fatorial de '+ numero +' é: 1')
    }else{

        for(var i = 1; i <= numero; i++){
            fatorial *= i;
        }
        return alert('O Fatorial de ' + numero +' é: '+ fatorial)
    }

}