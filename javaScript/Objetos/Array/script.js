const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const precos = [49, 99, 69, 89]

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
function andar(nome){ console.log(nome)}]

console.log(dados[1][2].cor)

////
const carros = new Array('Ford', 'Fiat', 'Honda')

carros[2] = 'Ferrari'
carros[3] = 'Kia'

console.log(carros.length)

//Array.from()

const li = document.querySelectorAll('li')

const arrayLi = Array.from(li)

const obj = {
  0: 'Vinicius',
  1: 'Silva',
  2: 'Teste',
  length: 3
}

const objArray = Array.from(obj)

console.log(li)
console.log(arrayLi)

// formas de criar um Array

const array = Array.of(10)
const array2 = Array(10)
console.log(array)

// O length retorna a quantidade de itens de uma array

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]

console.log(frutas.length)
console.log(frutas[2].length)
