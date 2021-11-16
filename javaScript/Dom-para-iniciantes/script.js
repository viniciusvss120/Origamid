//window.alert('teste')
const href = window.location.href
console.log(href)

if(href === 'http://127.0.0.1:5500/o-que-e-o-doms'){
  console.log('É igual')
}else{
  console.log('deu ruim')
}
const h1selecionado = document.querySelector('h1')
const h1classe = h1selecionado.classList

function callback1() {
  console.log('Clicou em',h1selecionado.innerText)
}

h1selecionado.addEventListener('click', callback1)