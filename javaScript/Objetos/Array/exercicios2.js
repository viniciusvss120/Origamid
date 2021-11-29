//Selecione cada curso e retorne um array com 
// objetos contendo o titulo, descrição,
//aula e hora de cada curso

const cursos = document.querySelectorAll('.curso')

const novoCurso = Array.from(cursos)
console.log(novoCurso)

const objetosCursos = novoCurso.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aula = curso.querySelector('.aulas').innerText
    const hora = curso.querySelector('.horas').innerText
    return {
        titulo: titulo,
        descricao: descricao,
        aula: aula,
        hora: hora
    }
})

console.log(objetosCursos)

//2 retorne uma lista com os numeros maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33]

const maioresQue100 = numeros.filter((item) =>{
    return item > 100
})

console.log(maioresQue100)

//3 Verifique se Baixo faz parte da lista de instrumentos e retone true
const instrumentos5 = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos5.some((item) => {
    return item === 'Baixo'
})
console.log(possuiBaixo)

// 4 retorne o valor total das compras

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]


const valorTotal = compras.reduce((acumulador, item, index) =>{
   const numeroLimpo =  item = +item.preco.replace('R$', '').replace(',', '.')

    return acumulador + numeroLimpo
}, 0)

console.log(valorTotal)

