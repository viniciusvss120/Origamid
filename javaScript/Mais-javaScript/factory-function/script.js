//function createButton(text) {
//  const numeroSecreto = 'knfnvdn'
//
//  function element() {
//    const buttonElement = document.createElement('button')
//    buttonElement.innerText = text
//    return buttonElement
//  }
//  return Object.freeze({
//    text,
//    element
//  })
//}
//
//const btnComprar = createButton('Comprar')
//const btnVender = createButton('Comprar')

//function Pessoa(nome) {
//  if (!(this instanceof Pessoa)) // ou (!new.target)
//    return new Pessoa(nome)
//  console.log(this)
//  this.nome = nome
//}
//
//Pessoa.prototype.andar = function() {
//  return `${this.nome} andou`
//}
//
//const designer = Pessoa('Vinicius')
//
//console.log(designer)

function $$(selecetedElements){
  const elements = document.querySelectorAll(selecetedElements)

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none'
    })
    return $$(selecetedElements)
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial'
    })
    return $$(selecetedElements)
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback)
    })
    return $$(selecetedElements)
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    return $$(selecetedElements)
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    })
    return $$(selecetedElements)
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  }
}

const btn = $$('button')

console.log(btn.hide().show())

function handleClick(event) {
  console.log(event.target)
}

btn.on('click', handleClick)
btn.addClass('active')
btn.removeClass('active')