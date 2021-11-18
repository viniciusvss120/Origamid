/*
const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[0])


const primeiraLi= document.querySelector('li')

console.log(primeiraLi)

const linksInternos = document.querySelector('[href^="#"]') 
console.log(linksInternos)


const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')


primeiraLi.classList.add('grid-section')

console.log(gridSectionHTML[0])
console.log(gridSectionNode[0])

gridSectionNode.forEach(function(item, index){
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)

*/

///////---/////

//1
const imagens = document.querySelectorAll('.animais img')
console.log(imagens)

//2
const retornaImg = document.querySelectorAll('img[src^="img/imagem"]')
console.log(retornaImg)

//3
const linksInterno = document.querySelectorAll('[href^="#"]')
console.log(linksInterno)

//4
const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

//5
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1])