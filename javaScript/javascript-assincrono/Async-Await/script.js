//async function puxarDados () {
//  try{
//    const responseDados = await fetch('./dados.json')
//    const jsonDados = await responseDados.json()
//  
//    document.body.innerText = jsonDados.aula
//    console.log(jsonDados)
//  }catch (erro) {
//    console.log('Deu ruim!', erro)
//  }
//
//  }


//
async function puxarDados () {
    const promiseDados =  fetch('./dados.json')
    const responseCliente =  fetch('./cliente.json')

    const jsonDados = await (await responseCliente).json()
    const responseDados = await (await promiseDados ).json()

  console.log(responseDados)
  console.log(jsonDados)
  }

  puxarDados()