function meuEscopo() {

    const imc = {
        'Abaixo do peso': 18.4,
        'Peso normal': 24.9,
        'Sobrepeso': 29.9,
        'Obesidade grau 1': 34.9,
        'Obesidade grau 2': 40,
    }


    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calculadora(evento) {
        evento.preventDefault();

        let peso = parseFloat(form.querySelector('#explicit-label-peso').value);
        let altura = parseFloat(form.querySelector('#explicit-label-altura').value);

        const calculo = peso / (altura * altura);

        if (calculo <= imc["Abaixo do peso"]) {
            resultado.innerHTML += `Seu IMC é <Strong>${calculo.toFixed(2)}. Abaixo do peso</ Strong>`;
        } else if (calculo < imc["Peso normal"]) {
            resultado.innerHTML += `Seu IMC é <Strong>${calculo.toFixed(2)}. Peso normal</ Strong>`;
        } else if (calculo < imc["Sobrepeso"]) {
            resultado.innerHTML += `Seu IMC é <Strong>${calculo.toFixed(2)}. Sobrepeso</ Strong>`;
        } else if (calculo < imc["Obesidade grau 1"]) {
            resultado.innerHTML += `Seu IMC é <Strong>${calculo.toFixed(2)}. Obesidade grau 1</ Strong>`;
        } else if (calculo <= imc["Obesidade grau 2"]) {
            resultado.innerHTML += `Seu IMC é <Strong>${calculo.toFixed(2)}. Obesidade grau 2</ Strong>`;
        } else {
            resultado.innerHTML += `Seu IMC é <Strong>${calculo.toFixed(2)}. Obesidade grau 3</ Strong>`;
        }

        resultado.classList.add('visivel');
    }

    form.addEventListener('submit', calculadora);

}

meuEscopo();
