const cep1 = document.querySelector('#cep')
const endereco1 = document.querySelector('#endereco')
const btn = document.querySelectorAll('.ativo')
let resultado = document.querySelector('.resultado')



function buscarEndereco (event){
  event.preventDefault()
  const cep = cep1.value
  const logradouro = endereco1.value
  buscarCep(cep, logradouro)

}

btn.forEach(item => {
  item.addEventListener('click', buscarEndereco)

})

function buscarCep (cep, logradouro){
  fetch(`https://viacep.com.br/ws/${cep}/json`)
  .then(response => response.text())
  .then(body => {
    resultado.innerText = body
  })
}

///
 const btcDisplay = document.querySelector('.btc')

function fetchBtc(){
  fetch(`https://blockchain.info/ticker`)
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',')
  })
}

//setInterval(fetchBtc, 500)

fetchBtc()

///
const btnProxima = document.querySelector('.proxima')
const paragrafoPiada = document.querySelector('.piada')

function puxarPiada(){
  fetch(`https://api.chucknorris.io/jokes/random`)
  .then(r => r.json())
  .then(piada => {
    console.log(piada.value)
    paragrafoPiada.innerText = piada.value
  })
}

btnProxima.addEventListener('click', puxarPiada)

puxarPiada()
