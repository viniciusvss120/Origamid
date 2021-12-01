export default function initFuncionamento(){

}

const funcionamento =document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

console.log(diasSemana)

const dataAgora = new Date()


















//const agora = new Date()
//const futuro = new Date('Dec 24 2021 23:59')
//
////console.log(agora.getMonth())
////console.log(futuro)
//
//function transformarDias(tempo){
//    return tempo / (24 * 60*60*1000)
//}
//
//const diasAgora = transformarDias(agora.getTime())
//const diasFututro = transformarDias(futuro.getTime())
//
//console.log(Math.floor(diasFututro - diasAgora))
