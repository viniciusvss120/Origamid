console.log(Number.isNaN(NaN))
console.log(Number.isNaN(4))

console.log(Number.isInteger(54.6))

// parseFloat e parseInt

console.log(parseFloat('45465,54'))
console.log(parseInt(54.25))

// toFixed()

const preco = 10.31154
console.log(preco.toFixed(2))

// toLocaleString
let valor = 49.48
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(valor)

// Math
console.log(Math.random())
console.log(Math.abs(-5.5))
console.log(Math.round(-5.5))
console.log(Math.max(5.5, 54.5, 55.8))
console.log(Math.min(5.5, 54.5, 55.8))

const aleatorio = Math.floor( Math.random() * 10)
const aleatorio1 = Math.floor( Math.random() * (40 - 20 + 1) + 20)

console.log(aleatorio1)
