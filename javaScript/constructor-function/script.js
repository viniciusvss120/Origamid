/* const carro = {
    marca: 'Marca',
    preco: 0
}

const honda = carro
honda.marca = 'Honda'
honda.preco = 2000 */

function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)

console.log(honda)

    

    