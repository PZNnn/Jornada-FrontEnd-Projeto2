const pontSeg = document.getElementById('seg')
const pontMin = document.getElementById('min')
const pontHr = document.getElementById('hr')

function relogio1(){

    //ponteiro de segundos--------

    const data = new Date()
    const segundos = data.getSeconds()
    const segundosdeg = ((segundos / 60) * 360) + 90

    if (segundos == 0){
        pontSeg.style.transition = 'none'
    }
    pontSeg.style.transform = `rotate(${segundosdeg}deg)`
    if (segundos == 1){
        pontSeg.style.transition = 'all 0.5s'
    }

    //ponteiro de minutos--------

    const minutos = data.getMinutes()
    const minutosDeg = ((minutos / 60) * 360) + 90

    if (minutos == 0){
        pontSeg.style.transition = 'none'
    }
    pontMin.style.transform = `rotate(${minutosDeg}deg)`
    if (minutos == 1){
        pontSeg.style.transition = 'all 0.5s'
    }
 
    //ponteiro de horas--------

    const horas = data.getHours()
    const horasDeg = ((horas / 12) * 360) + 90
    
    if (horas == 0){
        pontSeg.style.transition = 'none'
    }
    pontHr.style.transform = `rotate(${horasDeg}deg)`
    if (horas == 1){
        pontSeg.style.transition = 'all 0.5s'
    }

    /* Todos os IF são feitos para a estetica dos ponteiros, já que quando vão ir de 60 para 0 eles dão uma volta
    anti-horaria, Não soube como resolver de outra maneira, mas essa conta ^^ */
}
setInterval(relogio1, 1000)


