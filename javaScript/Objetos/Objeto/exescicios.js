// 1 Crie uma função que verifique corretamente o tipo de dado

function verificarDado(dado){
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado('Sting'))

// 2 Crie um objeto quadrado com a propriedade lados e torne ela imutavel

const quadrado = {
  altura: 5,

}

Object.defineProperties(quadrado,{
  lados:{
    value: 4,
    
  }
})

quadrado.lados = 6
console.log(quadrado)

//3 Previna qualquer mudança no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background:'#333'
}

Object.freeze(configuracao)
configuracao.width = 500

console.log(configuracao)

// 4 Liste o nome de todas as propriedades do protótipo de String e Array

console.log(Object.getOwnPropertyNames(String))
console.log(Object.getOwnPropertyNames(Array))