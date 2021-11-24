/* const carro = {
    marca: 'Marca',
    preco: 0
}

const honda = carro
honda.marca = 'Honda'
honda.preco = 2000 */

function Carro(){
    this.marca = 'Marca'
    this.preco = 2000
}

const honda = new Carro()
const fiat = new Carro()
fiat.marca = 'Fiat'
fiat.preco = 3000

    

    