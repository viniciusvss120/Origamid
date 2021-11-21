const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroH2 = document.querySelector('h2')

const h2left= primeiroH2.offsetLeft

const h2rect = primeiroH2.getBoundingClientRect()
console.log(h2rect.top)

if(h2rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageXOffset
)

const small = window.matchMedia('(max-width: 600')

if(small){
  console.log('Usúario mobile')
}else{
  console.log("usuario desctop")
}

console.log(small)