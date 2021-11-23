//1

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
console.log(copy)

const novoMenu = menu.cloneNode(true)

copy.appendChild(novoMenu)


//2
const faqs = document.querySelector('.faq')
const primeiroDt = faqs.querySelector('dt')

console.log(primeiroDt)

//3
const proximoDD =  primeiroDt.nextElementSibling
console.log(proximoDD)

//4


const conteudoAnimal = document.querySelector('.animais')

faqs.innerHTML = animais.innerHTML




