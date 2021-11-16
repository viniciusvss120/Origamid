var carro = 'Fusca'
function mostrarCarro(){
  
  console.log(carro)
}

console.log(mostrarCarro())
console.log(carro)

////---//// exercicios de escopo

//1
{

  var cor = 'preto'
  const marca = 'Fiat'
  let protas = 4
}
// variaveis dentro do scopo local não é possível acessar globalmente
console.log(marca)

//2
const dois = 2
function somarDois(x){
  return x + dois
}

function dividirDois(x){
  return x / dois
}

console.log(somarDois(4))
console.log(dividirDois(4))

// 3

const numero = 50

for(let numero =0; numero < 10; numero++){
  console.log(numero)
}

const total = 10 * numero
console.log(total)
