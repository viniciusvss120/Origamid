// 4

function seNumero(numero){
  if(typeof numero !== 'number') {
    console.log("Deu Ruim, digita um numero!")
  }else{
    console.log("Certinho!!")
  }
}

function tipoDeDado(dado){
  return typeof dado
}

console.log( tipoDeDado(5))
seNumero('lk')

function parOuImpar(numero){
  var resultado = numero % 2 === 0 ? "Par" : "Impar"
  return resultado
}

console.log(parOuImpar(6)) 

// 5

addEventListener('click', function(){
  console.log('Vinicius')
})

//6

function precisoVisitar(paisesVisitados){
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados}`
}

function jaVisitei(paisesVisitados){
  return `ja visitei ${paisesVisitados}`
}