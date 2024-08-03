let numeroSecreto;
let intentos;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste! El número secreto era ${numeroSecreto} y lo hiciste en ${intentos===1? intentos +' intento.': intentos+' intentos.'}`)
        console.log('Acertaste el número!');
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        console.log(`Intenta de nuevo, el número secreto no es ${numeroDeUsuario}, es ${numeroDeUsuario<numeroSecreto? 'mayor.':'menor.'}`);
        numeroDeUsuario < numeroSecreto ?
                                        asignarTextoElemento('p', `No, el número no es ${numeroDeUsuario}, es mayor.`):
                                        asignarTextoElemento('p', `No, el número no es ${numeroDeUsuario}, es menor.`);
        limpiarCaja();
        intentos++;
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    // Chequear si el número generado está ya en una lista, sino, generar uno nuevo

    if (listaNumeros.includes(numeroGenerado)) {
        if (listaNumeros.length === numeroMaximo) {
            listaNumeros = [];
            return generarNumeroSecreto();
        } else {
            return generarNumeroSecreto();
        }
    } else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}

function iniciador() {
    asignarTextoElemento('h1','¡Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}.`);

    // Generar número aleatorio nuevo
    numeroSecreto = generarNumeroSecreto();

    // Inicializar el número de intentos
    intentos = 1;

    // Deshabilitar comentario de la línea de abajo para saber el número siempre
    // console.log(numeroSecreto);
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();

    // Reiniciar los mensajes, el número secreto y número de intentos
    iniciador();

    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

iniciador();