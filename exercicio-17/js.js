function tempoTranscorrido(){
    let dia = document.getElementById('dia').value
    let mes = document.getElementById('mes').value
    let ano = document.getElementById('ano').value

    let now = new Date()

    let diaNow = now.getDate()
    let mesNow = now.getMonth() + 1
    let anoNow = now.getFullYear()

    alert('Dia: ' + dia - diaNow)
}