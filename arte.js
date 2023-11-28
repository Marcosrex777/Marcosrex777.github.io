// JavaScript Document

var preguntas = document.querySelectorAll('.pregunta');
var indicePreguntaActual = 0;
var puntuacion = 0;

function siguientePregunta() {
    if (indicePreguntaActual < preguntas.length - 1) {
        preguntas[indicePreguntaActual].style.display = 'none';
        indicePreguntaActual++;
        preguntas[indicePreguntaActual].style.display = 'block';
    }
}

function finalizar() {
    calcularPuntuacion();
    mostrarResultado();
}

function calcularPuntuacion() {
    puntuacion = 0;

    for (var i = 0; i < preguntas.length; i++) {
        var opciones = preguntas[i].querySelectorAll('input[type="radio"]');
        var respuestaCorrecta = false;

        for (var j = 0; j < opciones.length; j++) {
            if (opciones[j].checked && opciones[j].getAttribute('data-correcta') === "true") {
                respuestaCorrecta = true;
                break;
            }
        }

        if (respuestaCorrecta) {
            puntuacion++;
        }
    }
}

function mostrarResultado() {
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('puntuacion').textContent = puntuacion + ' / ' + preguntas.length;
}


function realizarDeNuevo() {
    puntuacion = 0;
    indicePreguntaActual = 0;

    for (var i = 0; i < preguntas.length; i++) {
        preguntas[i].style.display = 'block';

        var opciones = preguntas[i].querySelectorAll('input[type="radio"]');
        for (var j = 0; j < opciones.length; j++) {
            opciones[j].checked = false;
        }
    }

    document.getElementById('resultado').style.display = 'none';
}

