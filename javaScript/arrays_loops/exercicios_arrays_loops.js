// 1
var copasBrasil = [1958, 1962, 1970, 1994, 2002]

// 2
/*for(item in copasBrasil){
  console.log(`O Brasil ganhou a copa de ${item}`)
}*/

copasBrasil.forEach((item) => console.log(`O Brasil ganhou a copa de ${item}`))

// 3
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var item = 0; item < frutas.length; item++){
  console.log(frutas[item])
  if(frutas[item] === 'Pera'){
    break
    
  }
}

// 4
var fruta = 'Melância'
frutas.pop()
console.log(frutas)