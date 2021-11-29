/* //const perimetro = new Function('lado', 'retune lado * 4')

//console.log(perimetro)

///

function somar(ni, n2){
  return  n1 + n2
}

console.log(somar.length)
///metodo call

function darOi(){
    console.log('Oi pra vc!')
}

darOi.call()

//


function descricaoCarro(){
    console.log(this)
    console.log(this.marca + ' ' + this.ano)
}

descricaoCarro.call({marca: 'Honda', ano: 2015})

// this

const carros = ['Ford', 'Fiat', 'VW']

carros.forEach.call(carros,(item)=>{
    console.log(item)
})

//

function Dom(seletor){
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativo =function(classe){
    this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
    element: document.querySelector('li')
}

ul.ativo.call(li,'ativar')
//ul.ativo('ativar')

console.log(ul) */

const frutas = ['Uva', 'Maçã', 'Banana']

//Array.prototype.pop.call(frutas)
frutas.pop()

Array.prototype.mostrarThis = function(){
    console.log(this)
}
///
const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, (item) =>{
    return item.classList.contains('ativo')
    
})

console.log(filtro)

////// applay

const numeros = [33, 23, 34, 4,346]

console.log(Math.max.apply(null, numeros))

///bind()

const li2 = document.querySelectorAll('li')
const arrayLi = Array.from(li)

const filtro2 = Array.prototype.filter.bind(li,(item) => {
    return item.classList.contains('ativo')


})

console.log(filtro2)
//

