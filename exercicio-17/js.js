function tempoTranscorrido(){
    let dia = document.getElementById('dia').value
    let mes = document.getElementById('mes').value
    let ano = document.getElementById('ano').value

    let now = new Date()

    let diaNow = String( now.getDate() ).padStart(2, '0')
    let mesNow = String(now.getMonth() + 1).padStart(2, '0')
    let anoNow = now.getFullYear()

    alert('Dias: ' + Math.abs(dia - diaNow) + ' Meses: ' + Math.abs(mes - mesNow) + ' Anos: ' + Math.abs(ano - anoNow))
}