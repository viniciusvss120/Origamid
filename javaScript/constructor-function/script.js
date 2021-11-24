/* const carro = {
    marca: 'Marca',
    preco: 0
}

const honda = carro
honda.marca = 'Honda'
honda.preco = 2000 */

/* Essa função é responsavel pelo padrão de objeto que vai ser criado a parti do operador new,
   o this esta apntando para o objeto criado a parti da função*/

function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)

console.log(honda)
////

function Carro2(marca, precoInicial){
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
}

const madza = new Carro2('Madza', 6000)

console.log(madza)
