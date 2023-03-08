const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const resultado = document.querySelector('.container'); 
const div = document.createElement('div');

for (const key in elementos) {
    let {tag, texto} = elementos[key];
    let p = document.createElement(tag);
    p.innerHTML += `${texto}`;
    div.appendChild(p);
}

resultado.appendChild(div);