const temporizador = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let intervalo;

function criaTimer(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function mostraHora() {
    const timer = criaTimer(segundos);
    temporizador.innerHTML = `${timer}`;
    segundos++;
}

iniciar.addEventListener('click', () => {
    temporizador.classList.remove('pausado');
    clearInterval(intervalo);
    intervalo = setInterval(mostraHora, 1000);
});

pausar.addEventListener('click', () => {
    temporizador.classList.add('pausado');
    setTimeout(function () {
        clearInterval(intervalo);
    }, 10);
});

zerar.addEventListener('click', () => {
    temporizador.classList.remove('pausado');
    clearInterval(intervalo);
    temporizador.textContent = '00:00:00';
    segundos = 0;
});


/*
setInterval(function () {
    temporizador.innerHTML = `${mostraHora()}`;
}, 1000)

setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log('Ola Mundo!');
}, 5000);

*/