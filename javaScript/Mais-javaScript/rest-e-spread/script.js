//function perimetroForma(...listaArgumentos) {
//  console.log(listaArgumentos)
//  listaArgumentos.forEach(item => {
//    console.log(item)
//  })
//  //const argArray = Array.from(arguments)
//  //console.log(argArray)
//  //totalLados = totalLados || 4
//  //return lado * totalLados
//}
//
//perimetroForma(10, 4)
//perimetroForma(10, 2, 5,'dr')
//
//console.log(perimetroForma(10))

//const frutas = ['Banana', 'Uva', 'Morango']
//const legumes = ['Cenoura', 'Batatas']
//
//const comidas = [...frutas, 'Pizza', ...legumes]
//
//console.log(comidas)
//
/////
//const todosOsNumero = [4 , 5, 6, 68]
//const numeroMaximo = Math.max(...todosOsNumero)
//
//console.log(numeroMaximo)

const btn = document.querySelectorAll('button')

//const btnArray = Array.from(btn)
const btnArray = [...btn]

console.log(btnArray)