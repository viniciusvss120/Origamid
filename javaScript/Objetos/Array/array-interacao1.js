const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array) => {
    console.log(item, index, array)
})

console.log(carros)

/// Arrow functions

const li = document.querySelectorAll('li')

li.forEach((item) => item.classList.add('classe'))

// map() retorna outro array com os itens modificados
const carros1 = ['Ford', 'Fiat', 'Honda']

const novaArray = carros1.map((item, index, array) => {
  return console.log(item.toUpperCase(), index, array)
})
//
const numeros = [2, 5, 4]
const numerosNovo = numeros.map((item) => item*2)

console.log(numerosNovo)

//
const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const tempoAulas = aulas.map((aula) => aula.min)

const nomeAulas = function(aula){
    return aula.nome
}

const arrayNomeAula = aulas.map(nomeAulas)

console.log(tempoAulas)
console.log(arrayNomeAula)

// reduce()
const aulas2 = [10, 25, 30]

const reduceAula = aulas2.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index)
    return item 
},100)
//

const numeros = [10, 25, 30, 3, 54, 33, 22]

const maiorNumero = numeros.reduce((anterior, atual) =>{
    if(anterior > atual){
        return anterior
    } else{
        return atual
    }
},0)

console.log(maiorNumero)
/////
const aulas1 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const listaAulas = aulas1.reduce((acumulador, atual, index) =>{
    acumulador[index] = atual.nome
    return acumulador
},{})

console.log(listaAulas)

///
// some():

const frutas = ['Banana', 'Pera', 'Uva']

const temUva = frutas.some((item) => {
    console.log(item)
    return item === 'Uva'
})

console.log(temUva)

///// every()
const numeros = [6, 43, 22, 88, 101, 29]

const maiorQue3 = numeros.every(n => n > 7)

console.log(maiorQue3)

///findIndex()
const frutas2 = ['Banana', 'Pera', 'Uva']
const indexUva = frutas2.findIndex(item =>{
    return item === 'Uvas'
})

console.log(indexUva)

/// filter(): retorna uma array com a lista dfer valors durante a sua interação

const frutas3 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

const arrayFrutas = frutas3.filter((item) => {
    console.log(item)
    return item 

})

console.log(arrayFrutas)

//

const aulas2 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]
 const maiores15 = aulas2.filter((aula)=>{
      return aula.min > 15
     
 })

 console.log(maiores15)