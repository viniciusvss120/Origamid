 //const pessoa = new Object({
 //    nome: 'vinicius'
 //})
//
 //console.log(pessoa)
//
//
 /////
//
 //const carro = {
 //    rodas: 4,
 //    init(valor) {
 //       this.marca = valor
 //       return this
 //    },
 //    acelerar(){
 //        return this.marca + ' acelerou'
 //    },
 //    buzinar(){
 //        return this.marca + ' buzinou'
 //    }
 //}
//
 //const honda = Object.create(carro).init('Honda')
//
 //console.log(honda.acelerar())
 //honda.marca = 'honda'
//
 //const ferrari = Object.create(carro).init('Ferrari')
//
 //console.log(ferrari.acelerar())
//
 ///// Object.assign() : adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos.
//
 //const funcaoAutomovel = {
 //    acelerar(){
 //        return 'acelerou'
 //    },
 //    buzinar(){
 //        return 'buzinou'
 //    }
 //}
//
 //const moto = {
 //    rodas: 2,
 //    capacete: true
 //}
//
 //Object.assign(moto, funcaoAutomovel, carro)
//
 //console.log(moto)
//
 ///// Object,definPropeties()
//
 const moto2 ={
     capacete: true
 }

 /*Object.defineProperties(moto2,{
     rodas: {
         value: 2,
         configurable: false,
         writable: false,
         enumerable: false,
         get() {

         },
         set(){
             
         }
     }
 })*/

 //Object.defineProperties(moto2,{
 //    rodas: {
 //        get() {
 //           return 2
 //        },
 //        set(){
//
 //        }
 //    }
 //})

 
 console.log(moto2)

 // get e set

 Object.defineProperties(moto2,{
    rodas: {
        enumerable: true,
        get() {
           this._rodas
        },
        set(valor){
           this._rodas = valor * 4
        }   
    }
})

/// Object.getOwnPropertyDescriptors(obj)

Object.getOwnPropertyDescriptors(Array)

console.log()

//

const key = Object.keys(moto2)


console.log(key)

//Object.getOwnPropertyNames()

Object.getOwnPropertyNames(moto2)

/// Object.freeze(): impede qualquer mudança nas propriedades;
/// Object.seal(): previne a adição de novas propriedades e impede que as atuais sejam deletadas.
/// Object.preventExtensions(): previne a adião de novas propriedades.


const carro3 = {
    marca: 'Fiet',
    ano: 2018
}

Object.freeze(carro3)
Object.seal(carro3)
Object.preventExtensions(carro3)

carro3.marca = 'Honda'
carro3.portas = 4

console.log(carro3)
console.log(Object.isFrozen(carro3))

//// Propriedade e método do protótipo

const frutas = ['Banana', 'Uva']

console.log(frutas.hasOwnProperty('map'))

/// toString()

console.log(frutas.toString())
console.log(carro3.marca.toString())
