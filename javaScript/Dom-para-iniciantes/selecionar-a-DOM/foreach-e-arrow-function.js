const imgs = document.querySelectorAll('img')


imgs.forEach(function(item,index, array){
    console.log(item,index,array)
})

const titulo = document.getElementsByClassName('titulo')
const tituloArray = Array.from(titulo)

tituloArray.forEach(item => console.log(item))

//1
const paragrafo = document.querySelectorAll('p')
