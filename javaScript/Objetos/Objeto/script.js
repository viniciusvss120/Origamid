 const pessoa = new Object({
     nome: 'vinicius'
 })

 console.log(pessoa)


 ///

 const carro = {
     rodas = 4,
     init(valor){
        this.marca = valor
        return this
     },
     acelerar(){
         return this.marca + ' acelerou'
     },
     buzinar(){
         return this.marca + ' buzinou'
     }
 }

 const honda = Object.create(carro).init('Honda')

 console.log(honda.acelerar())
 honda.marca = 'honda'