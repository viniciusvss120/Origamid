//const promises = new Promise(function(resolve,reject){
//   let condicao = false
//   if(condicao){
//       setTimeout(() =>{
//           resolve({nome: 'Vinicius', idade: 22})   
//        },1000)
//
//   }else{
//       reject(Error('Deu ruim!'))
//
//   }
//})
//
//const retorno = promises.then(function(resolucao){
//    console.log(resolucao)
//    return resolucao
//
//}).then(resolucao => {
//    console.log(resolucao)
//
//}).catch(rejeitada => {
//    console.log(rejeitada)
//}).finally(() => {
//    console.log('acabou')
//})
//
//console.log(retorno)

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    },1500)
})
const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    },500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) =>{
    console.log(resolucao)
})

//