//1
  function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
      console.log(this.nome + ' andou')
    }
  }

  
  //2
  const joao = new Pessoa('João', 20)
  const maria = new Pessoa('Maria', 25)
  const bruno = new Pessoa('João', 15)
  console.log(joao.andar())
  //const pessoas = document.querySelectorAll('li')

  //3
  function Dom(seletor){
    this.element = document.querySelectorAll(seletor)
    this.addClass = function(classe){
      this.element.forEach((item) =>{
        item.classList.add(classe)
        
      })
    }
    this.removeClass = function(){
      this.element.forEach((item) =>{
        item.classList.remove('ativado')
      })
    }
  }

  const construtor = new Dom('li')
  console.log(construtor.element)
  console.log(construtor.addClass('ativado'))
  console.log(construtor.removeClass())

