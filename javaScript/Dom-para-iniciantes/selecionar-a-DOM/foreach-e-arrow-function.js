const imgs = document.querySelectorAll('img')


imgs.forEach(function(item,index, array){
    console.log(item,index,array)
})

const titulo = document.getElementsByClassName('titulo')
const tituloArray = Array.from(titulo)

tituloArray.forEach(item => console.log(item))

//1
const paragrafo = document.querySelectorAll('p')
const arrayP = Array.from(paragrafo)

//paragrafo.forEach(item => console.log(item))

//2

paragrafo.forEach((item) => console.log(item.innerText))

//3

const img = document.querySelectorAll('img')

imgs.forEach((item, index) => {
    return console.log(item,index)
});

let i = 0 
img.forEach( () => {
    console.log(i++)
});

img.forEach(() => console.log(i++))
