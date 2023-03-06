function getDiaFormatado(data) {
    const dias = ['Domingo','Segunda-Feira','Terça-Feira',
    'Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];

    return dias[data.getDay()];
};

function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
}

function getMesFormatado(data) {

    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

    return meses[data.getMonth()];

};

function dataFormatada() {
    const resultado = document.querySelector('.resultado');

    const time = Date.now();
    const hoje = new Date(time);

    const dia = getDiaFormatado(hoje);
    const mes = getMesFormatado(hoje);

    resultado.innerHTML += `${dia}, ${hoje.getDate()} de ` + 
    `${mes} de ${hoje.getFullYear()}` +
    `</br>${hoje.getHours()}:${zeroAEsquerda(hoje.getMinutes())}`;



}



dataFormatada();
//console.log(data);//
