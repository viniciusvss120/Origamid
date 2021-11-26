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

// metodos modificadores sort()

const instrumentos1 = ['Guitarra', 'Baixo', 'Violão']
instrumentos1.sort()

const idade = [32, 21, 33, 43, 1, 12, 8]
idade.sort()

console.log(instrumentos1)
console.log(idade)

/* O unshift() adiciona o elemento no inicio do array,
    ja o push() adiciona no final do array*/
const carros2 = ['Ford', 'Fiat', 'VW']
carros2.unshift('Kia', 'Ferrari')
carros2.push('Parati', 'Gol')

console.log(carros2)

// O shift() remove o primeiro elemnto, ja pop() remove o Ultimo

console.log(carros2.pop())

// revarse() inverte a ordem do array

const lista = ['arroz', 'oleo', 'alface']
console.log(lista.reverse())

/* splice adiciona elementos a aparti do index e remove a quantidade de itens que for 
   passada no segundo paramêtro*/
   const carros3 = ['Ford', 'Fiat', 'VW', 'Honda']

   console.log(carros3.splice(2, 1 ,'Fusca'))

   console.log(carros3)

   //copyWithin()
   console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2 , 0,3))

   //fill
   console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana' , 0,3))

   //metodo de acesso concat()

   const transporte = ['Barco', 'Avião']
   const transporte1 = ['Carro', 'Moto']
   const transporte3 = transporte.concat(transporte1)

   const meioDetransporte =  [].concat(transporte, transporte1, 'Van')
   console.log(meioDetransporte)
   
   // includes(), indexOf, lestIndexof()
   const linguagens = ['html', 'css', 'js', 'php', 'pyton', 'js']
  
   console.log(linguagens.includes('ruby'))
   console.log(linguagens.indexOf('pyton'))
   console.log(linguagens.lastIndexOf('js'))

   // slice

   console.log(linguagens.slice(2,4))