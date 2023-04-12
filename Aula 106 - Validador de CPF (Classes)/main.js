class ValidaCPF {
    constructor(cpfEnviado) {
        this._cpf = cpfEnviado;
      }
    
      get cpfLimpo() {
        return this._cpf.replace(/\D+/g, "");
      }

  valida(cpf) {
    // verifica se o CPF contém exatamente 11 dígitos 
    // numéricos consecutivos, ou seja, sem nenhum outro caractere entre eles.
    if (!/^\d{11}$/.test(this.cpfLimpo)) return false;
    // verifica se o CPF é uma sequência de um único dígito numérico 
    // repetido 11 vezes, como "00000000000" ou "11111111111".
    if (/^(\d)\1{10}$/.test(this._cpf)) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.criaDigito(cpfParcial);
    const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }

  static criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }
}

const cpf1 = new ValidaCPF("106.402.984-19");

if (cpf1.valida(cpf1._cpf)) {
  console.log("CPF válido.");
} else {
  console.log("CPF inválido.");
}
