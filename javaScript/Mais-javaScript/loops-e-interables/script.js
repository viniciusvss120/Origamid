const frutas = ['Banana', 'Morango', 'Uva']
const frase = 'Isso é JavaScript'

for(const fruta of frutas) {
    console.log(fruta)
}

for(const char of frase) {
    console.log(char)
}

//fetch('https://pokeapi.co/api/v2/pokemon/')
//.then(({headers}) => console.log(headers))

const buttons = document.querySelectorAll('button')

for(const btn of buttons) {
    btn.style.color = 'blue'
}

const carro = {
    marca: 'Honda',
    ano: 2021
}

Object.defineProperties(carro, {
    rodas:{
        value: 4,
        enumerable: true
    }
})

for(const chave in carro) {
    console.log(chave, carro[chave])
}

