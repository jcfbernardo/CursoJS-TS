const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 122));
const geraNumeros = () => String.fromCharCode(rand(48, 57));
const simbolos = '~!@#$%&*()_+{}[]|/?><-';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    
    for (let i = 0; i < qtd; i++) {
        maisculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolos());
    }

    return senhaArray.join('').slice(0, qtd);
}

