var pessoa = {
  nome: 'Vinicius',
  idade: 22,
}
console.log(pessoa)


var quadrado = {
  lados: 4,
  area(lado){
    return lado * lado
  },
  perimetro (lado){
    return this.lados * lado
  },
  cinco(){
    return 5
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
console.log(quadrado.cinco())


/////////-----////////----/////

console.log( Math.random())

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2
  }

}

menu.backgroundColor = '#000'
menu.color = 'blue'

menu.esconder= function(){
  console.log('escondido')
}

var bg = menu.backgroundColor
console.log(menu.metadeHeight())

// varificar se existe a propriedade no objeto
console.log(menu.hasOwnProperty('color'))

////----/////-----////--///

