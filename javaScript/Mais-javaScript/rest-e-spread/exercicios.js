// Reescreva a Função utilizando valores iniciais de parâmetros com ES6

function createButton(background = 'blue', color = 'red') {
 

  const buttonElement = document.createElement('button')
  buttonElement.style.background = background
  buttonElement.style.color = color
  return buttonElement
}

const redButton = createButton('black', 'tomato')

//

const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Pimenta']

comidas.push('Cenoura', 'Pimenta', ...frutas)

console.log(comidas)