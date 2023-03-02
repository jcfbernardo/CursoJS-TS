const nome = prompt('Digite seu nome:');

console.log(`Seu nome é: ${nome}`);
console.log(`Seu nome tem ${nome.length} letras`);
console.log(`A segunda letra do seu nome é: ${nome.charAt(1)}`);
console.log(`Qual o primeiro índice da letra "J" no seu nome? ${nome.indexOf('J')}`);
console.log(`Qual o último índice da letra "O" no seu nome? ${nome.lastIndexOf('O')}`);
console.log(`As últimas 3 letras do seu nome são: ${nome.slice(-3)}`);
console.log(`As palavras do seu nome são: ${nome.split(' ')}`);
console.log(`Seu nome com letras maiúsculas: ${nome.toUpperCase()}`);
console.log(`Seu nome com letras minúsculas: ${nome.toLowerCase()}`);