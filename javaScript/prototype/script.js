function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.andar = function(){
    return this.nome + ' Pessoa andou'
}

const vinicius = new Pessoa('Vinicius', 22)

console.log(vinicius.andar())
console.log(Pessoa.prototype)