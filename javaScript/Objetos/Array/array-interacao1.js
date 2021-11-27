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



