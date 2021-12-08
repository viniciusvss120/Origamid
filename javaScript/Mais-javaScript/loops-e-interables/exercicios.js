//Crie 4 li's na página utilizando o for...of adicione uma classe a cada le

const itens = document.querySelectorAll('li')

for( const item of itens) {
    item.classList.add('ativo')
}

//
for(const windowkey in window){
    console.log(windowkey + ': ' + window[windowkey])
}