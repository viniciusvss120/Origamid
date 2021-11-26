// 1 retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050) + 1050)) 

// 2 Retorne o maior numero da lista abaixo
// resposta chave: usando o split a gente consegue retornar um array e definir o padão
let numero = '4, 5, 20, 8, 9'
let numeroArray = numero.split(', ')
const numeroMaximo = Math.max(...numeroArray)
console.log(numeroMaximo)

/*3 Crie uma funçõ para limpar os preços e retornar
    os números com centavos arredondados depois retorne
     a soma total*/

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230 ', 'r$ 200']

function limparPreco(preco) {
  preco = +preco.replace('R$', '').replace('r$', '').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach((preco) =>{
  soma += limparPreco(preco)
})

console.log(soma.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}))

limparPreco(listaPrecos[1])
