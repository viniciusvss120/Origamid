//const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')

//console.log(h1.innerHTML = '<p>Novo Titulo</p>')
//console.log(animaisLista.innerText)

const lista = document.querySelector('.animais-lista')

//console.log(lista.previousElementSibling)
//console.log(lista.children)
//console.log(lista.querySelector('li:last-child'))

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

const mapa = document.querySelector('.mapa')

//contato.insertBefore(animais, mapa)

contato.replaceChild(mapa,titulo)

const novoh1 = document.createElement('h1')

novoh1.innerText = 'Novo Titulo'
novoh1.classList.add('titulo')

//mapa.appendChild(novoh1)

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)

//cloneH1.classList.add('azul')
//faq.appendChild(cloneH1)

