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

transacao.forEach((item) =>{
  item.valor = parseInt(item.valor)
  console.log(item.valor)
})

