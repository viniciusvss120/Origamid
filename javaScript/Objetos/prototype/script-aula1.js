//1
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idadeidade = idade
}
 
Pessoas.prototype.junto = function(){
    return this.nome +' '+ this.sobrenome
}

const pessoa = new Pessoas('Vinicius', 'Silva', 22)

//2
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

//3
const li = document.querySelector('li')

li; // HTMLLIElement
li.click;//Function
li.innerText;// String
li.value;// Number
li.hidden;// Boolean
li.offsetLeft;// Number
li.click();// undefined

//4
li.hidden.constructor.name // String
