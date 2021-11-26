function verificar(palindromo){
    var palavraInvertida = palindromo.split('').reverse().join('')

    if(palindromo === palavraInvertida)
        return alert("É Palíndromo!!!")
    
    return alert("NÃO é Palíndromo!")    
}