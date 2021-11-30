// Mude a cor da tela para azul e depois para vermelho a cada 2s

//function mudarClasse(){
//  document.body.classList.toggle('vermelho')
//}
//
//setInterval(mudarClasse, 2000)

//Crie um cronometro utilizando o setInterval. Deve ser possivel iniciar,pausar e resetar (duplo clique no pausar)

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector ('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let ini = 0

let timer

function iniciarTempo(){
  timer = setInterval(() =>{
    tempo.innerText = ini++
  }, 100)

  iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
  clearInterval(timer)
  iniciar.removeAttribute('disabled', '')
}

function resetarTempo(){
  tempo.innerText = 0
  i = 0
}
