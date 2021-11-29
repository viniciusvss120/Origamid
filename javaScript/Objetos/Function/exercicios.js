// 1 

const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item)=>{
    return acumulador + item.innerText.length
}, 0)

console.log(totalCaracteres)

// 2

function criarElemento(tag, classe, conteudo){
    const elemento = document.createElement('div')
    classe ? elemento.classList.add(classe): null
    conteudo ? elemento.innerHTML = conteudo: null

    return elemento
}

console.log(criarElemento('li', 'azul', 'Esse é o conteudo'))

//3

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

console.log(h1Titulo('Cursos de JavaScript'))