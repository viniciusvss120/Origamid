function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.andar = function(){
    return this.nome + ' Pessoa andou'
}

const vinicius = new Pessoa('Vinicius', 22)

//console.log(vinicius.andar())
//console.log(Pessoa.prototype)

const pais = 'Brasil'
const cidade = new String('Rio')

console.log(cidade.toUpperCase())


const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li')

// Transforma em um array

const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)

/////

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar(){
       return true
    }
}