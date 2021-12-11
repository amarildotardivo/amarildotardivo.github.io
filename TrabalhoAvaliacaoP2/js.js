function calculaAluguel(){
    let dataRetirada = new Date( document.getElementById('dataRetirada').value )
    let dataDevolucao = new Date(  document.getElementById('dataDevolucao').value )

    let cidadeRetirada = document.getElementById('cidadeRetirada')
    let cidadeEntrega = document.getElementById('cidadeEntrega')
    let tipoCarro = document.getElementById('tipoCarro')

    let mili = dataDevolucao.getTime() - dataRetirada.getTime()   
    let dias = mili / (1000*60*60*24);

    let preco = tipoCarro.value * dias

    if(cidadeRetirada.value != cidadeEntrega.value){
        preco = preco + 300
        alert('O Aluguel Custará: ' + preco)
    }else{
        alert('O Aluguel Custará: ' + preco)
    }
    
}