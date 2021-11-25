
// Formas de apontar uma string
const comida = 'Pizza'
const agua = new String('Agua')

console.log(agua.toLowerCase())
console.log(agua.length)
console.log(comida.length)

/* utilizando o operador length para dizer a quantidade de caracter
   ou dizer qual é o ultimo caracter, e tbm usando o método charAt 
   para dizer qual é o caracter de acordo com sua posição*/
const frase = 'A melhor comida'

console.log(frase[frase.length - 1])
console.log(frase.charAt(0))

//metodo concat() serve para juntar os caracters.
const frase = 'A melhor Linguagem é '
const linguagem = 'JavaScript'

const fraseFinal = frase.concat(linguagem)

console.log(fraseFinal)

//metodo include()
const fruta = 'Banana'
const listaFruta = 'Melancia, Banana, Laranja'

console.log(fruta.includes(fruta, 7))

console.log(fruta.startsWith('Ba'))
console.log(fruta.endsWith('na'))

/* slice é o método que corta a string de acordo com os valores
  de start e end */
  const transacao1 = 'Depósito de cliente'
  const transacao2 = 'Depósito de fornecedor'
  const transacao3 = 'Taxa de camisas'

  console.log(transacao1.slice(0,3))

  /* O indexOf retorna o index da string, assim que achar o promeiro resultado
     ele ja retorna. No caso do lastIndexOf ele retorna o último resultado*/

     console.log(transacao1.indexOf('c'))
// método pedStart

const preco = 'R$ 99,00'

console.log(preco.padStart(30, '.'))

// método repeat
const frase2 = 'ta'

console.log(frase2.repeat(4))

/* O método replace() troca parte da string por outra.Podemos utilizar uma
  regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar
  apenas o primeiro valor que encontrar*/

  let listaItens = 'Camisa Bonés Calças Bermudas Vestidos Saias'
  listaItens = listaItens.replace(/[ ]+/g, ', ' )

  listaItens = listaItens.replace('Calças', 'Vestidos')

  console.log(listaItens)

  /* O método split divide a string de acordo com o padrão passado
     e retorna um array */

     const arrayLista = listaItens.split(', ')
     console.log(arrayLista)

     const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
     const htmlArray = htmlText.split('div')
     const novoHTML = htmlArray.join('section')

     console.log(novoHTML)
     console.log(htmlArray)

     //O método trim() remove espaços

     const valor = '  R$ 23.00  '
     valor.trim()
     valor.trimStart()
     valor.trimEnd()
