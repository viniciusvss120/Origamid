var videoGame = ['Switch', 'PS4', 'XBOX',]

//console.log(videoGame.pop())
console.log(videoGame.push('3DS'))
console.log(videoGame)
///////-----/////////-----/////

// lOOPS

for(var numero = 0; numero <= 10; numero++){
  console.log(numero)
}

// While Loop

var i = 0

while(i < 10) {
  console.log(i)

  i++
}

/////----//////---////
var videoGame = ['Switch', 'PS4', 'XBOX', '3DS']

for(var item = 0; item < videoGame.length; item ++){
  console.log(videoGame[item])
  }


for(var item = 0; item < videoGame.length; item ++){
  console.log(videoGame[item])
  if(videoGame[item] === 'PS4'){
    break
  }
}

////---/// 

var frutas = ['Banana', 'Pera', 'Maçã', 'abacaxi', 'uva']
frutas.forEach(function(item, index, todos){
  console.log(item, index, todos)
})