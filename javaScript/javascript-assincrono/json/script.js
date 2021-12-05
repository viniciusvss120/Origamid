

fetch('./dados.json')
.then(r => r.json()) // Utilizando esse .json() é a mesma coisa de JSON.PARCE()
.then(json => {
  json.forEach(materia => {
   // console.log(materia.aula)
  })
})

///JSON.PARSE / JSON.STRING

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript"

}
localStorage.config = JSON.stringify(configuracoes)



console.log(JSON.parse(localStorage.config))

//