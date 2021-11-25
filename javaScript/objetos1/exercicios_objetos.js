// 1
var dadosPessoais = {
    nome: 'Vinicius',
    sobrenome: 'Silva Souza',
    idade: 22,
    sexo: 'Masculino'
}

//2

dadosPessoais.mostrarNome = function(){
    return `${this.nome} ${this.sobrenome}`
}
console.log(dadosPessoais.mostrarNome())

// 3
var carro = {
    preco : 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000
console.log(carro.preco)

// 4

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    ação(meliante){
        if(meliante === 'homem'){
            return 'latido, latido'
        }else{
            return 'deitado'
        }

    }
}

console.log(cachorro.ação('mulher'))