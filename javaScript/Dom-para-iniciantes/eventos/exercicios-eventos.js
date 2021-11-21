//1
const link = document.querySelectorAll('a[href^="#"]')

function addClasse(event) {
  event.preventDefault()
  link.forEach((link) => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.toggle('ativo')
}
link.forEach((item) =>{
  item.addEventListener('click', addClasse)
})

//2
const todosElementos = document.querySelectorAll('body *')

function handleElemento(event){
  console.log(event.currentTarget)
}

todosElementos.forEach((elemento) =>{
  elemento.addEventListener('click', handleElemento)
})

//3
/*function handleElemento(event){
  event.currentTarget.remove()
}*/

//4

function handleClickT(event) {
  console.log(event.key)
  if(event.key === 't'){
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickT)