//const regexp = /\w+/gi
//
//const regexp1 = new RegExp('\\w+', 'gi')
//
//const frase = 'JavaScript Linguagem 101'
//
//console.log(frase.replace(regexp1, 'x'))

/// Propriedades

//regexp.global
//regexp.multiline
//regexp.ignoreCase


////


//const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 55'
//
//const regexp = /[A-Za-z]+/g
//let i = 1
//while(regexp.test(frase)){
//  console.log(i++, regexp.lastIndex)
//}

/// match()

//const resultados = frase.match(regexp)
//console.log(resultados)

/// split
//const resultados2 = frase.split(regexp)
//
//console.log(resultados2)

/// replace()

//const tags = `
//<ul>
//  <li>Item 1</li>
//  <li>Item 2</li>
//</ul>
//`
//const regexp = /(?<=<\/?)\w+/g
//
//const resultado = tags.replace(regexp, 'div')
//
//console.log(resultado)

const email = `
joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
vinicius100@live.com
`

const regexp = /(\w+@)([\w.]+)/g

const resultado = email.replace(regexp, function(...args){
  console.log(args)
  if(args[2]=== 'homail.com.br'){
    return args[1] + 'hotmail.com.br'
  }else if(args[2] === 'ggmail.com.br'){
    return args[1] + 'gmail.com.br'
  }else if(args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br'
  }else {
    return args[0]

  }

})

console.log(resultado)
//


