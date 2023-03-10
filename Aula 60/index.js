const qualMaior = (var1, var2) => var1 > var2 ? 
        `O número ${var1} é maior que ${var2}` : `O número ${var2} é maior que ${var1}`;

console.log(qualMaior(24550,20));

const ePaisagem = (lar, alt) => lar > alt;

console.log(ePaisagem(100,200));


function fizzBuzz(var1) {

    if (isNaN(var1)) {
        return 'A variável passada não é um número!';
    }

    if (var1 % 3 === 0 && var1 % 5 === 0) { return `${var1}: FizzBuzz`;
    } else if (var1 % 3 === 0) { return `${var1}: Fizz`;
    } else if (var1 % 5 === 0){ return `${var1}: Buzz`;
    } else { return var1;
    }

    
}

const numeros = 50;

for (let index = 1; index <= numeros; index++) {
    console.log(fizzBuzz(index));
}

