
//função declaration
function somar (a,b){
    return a + b
}

somar(5,6)

//
const somar = function(a,b){
    return a+b

}

///IIFE
const instrumento = 'Violao'

(function(){
    const instrumento = 'Guitarra'

    console.log(instrumento)
})()

console.log(instrumento)