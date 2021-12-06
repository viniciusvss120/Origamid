class Veiculo {
  constructor(rodas) {
    this._rodas = rodas
  }
  acelerar() {
    console.log('Acelereou')
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Moto empinou com ' + this.rodas + 'rodas')
  }
}

const honda = new Moto(2)
const civic = new Veiculo(4)