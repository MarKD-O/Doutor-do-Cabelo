var carros = document.getElementById("carros")
var fotos = ["ambiente1.webp","ambiente2.webp","equipe.webp", "vitor.webp", "ambiente4.webp", "vitor2.webp"]
var indice = 0
var temporizador
var tempoEspera = 2500

window.onload = Inicio

function Inicio() {

    Mostrarfoto()
    AutomatizarFoto()

}

function Avancar() {

    indice++

    if (indice >= fotos.length) {
        indice = 0
    }

    Mostrarfoto()

}


function AutomatizarFoto() {

    temporizador = setInterval(Avancar, tempoEspera)

}

function Mostrarfoto() {

    carros.style.opacity = 0

    setTimeout(() => {
        carros.src = "../img/" + fotos[indice]
        carros.style.transition = "opacity 0.6s"
        carros.style.opacity = 1
    }, 300)

}