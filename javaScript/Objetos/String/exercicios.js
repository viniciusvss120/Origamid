//1

const transacao = [
  {
    decricao: 'Taxa do pão',
    valor: 'R$ 39'
  },
  {
    decricao: 'Taxa do mercado',
    valor: 'R$ 129'
  },
  {
    decricao: 'Recebimento de cliente',
    valor: 'R$ 99'
  },
  {
    decricao: 'Taxa do banco',
    valor: 'R$ 129'
  },
  {
    decricao: 'Recebimento de cliente',
    valor: 'R$ 49'
  }
]

/* let taxaTotal = 0
let recebimentoTotal = 0
transacao.forEach((item) =>{
  const numeroLimpo = +item.valor.replace('R$', '')
  const descricao = item.descricao.slice(0, 4)
  console.log(descricao)
  
  if( descricao === 'Taxa'){
    taxaTotal += numeroLimpo
  }else{
    recebimentoTotal += numeroLimpo
  } 
}) */


//2

const transporte = 'Carro,Avião,Trem,Ônibus,Bicicleta'

const arrayTransporte = transporte.split(',')

console.log(arrayTransporte)

// 3 Substitua todos os span's por a's

let html = `<ul>
                <li><span>Sobre</span><li>
                <li><span>Produto</span><li>
                <li><span>Contato</span><li>
              </ul>`
html = html.split('span').join('a')

console.log(html)

// 4 Retorne o ultimo caracter da frase
const frase = 'Melhor do ano'

console.log(frase[frase.length -1])

// 5 retorne o total de taxas
let taxaTotal = 0
const transacao2 = ['Taxa de banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial']

transacao2.forEach((item) => {
  item = item.toLowerCase()
  item = item.trim()
  item = item.slice(0,4)

  if(item === 'taxa'){
    taxaTotal++
  }
})

console.log(taxaTotal)

