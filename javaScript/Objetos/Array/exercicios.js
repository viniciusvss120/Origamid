const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

//Remova o primeiro valor de comidas e coloque em uma variável

let valorRemovido = comidas.shift()

console.log(valorRemovido)

//Remova o ultimo valor de comida e coloque em uma variável

let ultimoValor = comidas.pop()

console.log(ultimoValor)

// Adicione 'Arro' ao final do array

let adicionarComida = comidas.push('Arroz')
console.log(comidas)

// Adicionar 'Peixe' e 'Batata' ao inicio do array
let adicionarComida2 = comidas.unshift('Peixe', 'Batata')

console.log(comidas)

//
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']
//Arrume os estudantes em ordem alfabética
let ordem = estudantes.sort()
//console.log(ordem)

//Inverta a ordem dos estudantes 

let ordemInversa = estudantes.reverse()
//console.log(estudantes)

//Verifique se Joana e/ou Juliana faz parte dos estudantes
let validate = estudantes.includes('Juliana')
console.log(validate)

//
let html = `<section>
              <div>Sobre</div>
              <div>Produto</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li
html = html.split('section').join('ul').split('div').join('li')



console.log(html)

//
let carros4 = ['Ford', 'Fiat', 'VW', 'Honda']
/* Remova o último carro, mas antes de remover 
  salve o array original em uma variavel*/
  let cloneArray = carros4.slice()
  
  carros4.pop()


console.log(cloneArray)
console.log(carros4)

