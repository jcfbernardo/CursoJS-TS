let valorTotal = [];

function cpf(cpf) {
  let cpfLimpo = cpf.replace(/\D+/g, "");
  let cpfArray = Array.from(cpfLimpo);
  return calculaCpf(cpfArray);
}

function calculaCpf(cpfArray) {
  let valorTotal = cpfArray;
  let valorAux = multiplicaDigitosCPF(cpfArray);

  function multiplicaDigitosCPF(arr) {
    let arrAux = [];
    arr.reduce((ac, val, index) => {
      arrAux.splice(index, 0, Number(val) * ac);
      ac = ac - 1;
      return ac;
    }, arr.length + 1);
    return arrAux;
  }

  function defineDigito(arr) {
    let soma = arr.reduce((ac, val) => ac + val, 0);
    let calculo = 11 - (soma % 11);
    if (calculo > 9) {
      return 0;
    } else {
      return calculo;
    }
  }

  let newNumero = defineDigito(valorAux);
  valorTotal.push(newNumero);

  if (valorTotal.length < 11) {
    return calculaCpf(valorTotal);
  } else {
    return valorTotal;
  }
}

console.log(cpf("705.484.450"));
