class IsCpfValid {
  constructor(CPF) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: String(CPF).replace(/\D+/g, "")
    });
  }

  valida() {
    if (!this.cpfLimpo || typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    const invalidCpfs = [
      '00000000000', '11111111111', '22222222222', '33333333333',
      '44444444444', '55555555555', '66666666666', '77777777777',
      '88888888888', '99999999999'
    ];
    if (invalidCpfs.includes(this.cpfLimpo)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(this.cpfLimpo[i]) * (10 - i); // transforma o cpf em um numero (int)
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(this.cpfLimpo[9])) {
      console.log("CPF inválido")
      return false;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(this.cpfLimpo[i]) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(this.cpfLimpo[10])) {
      console.log("CPF inválido")
      return false;
    }
    return true;

  }
}