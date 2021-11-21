//1
const img = document.querySelector('img')

const imgTop = img.offsetTop

console.log(imgTop)

//2
function somaImagens(){
const imagens = document.querySelectorAll('img')
let soma = 0

imagens.forEach((imagem) => {
  soma += imagem.offsetWidth
  
})
console.log(soma)
}
window.onload = function (){
  somaImagens()
}

//3
const links = document.querySelectorAll('a')

links.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'Possui acessibilidade')

  }else{
    console.log('Não possui acessibilidade')
  }
})

//4

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}