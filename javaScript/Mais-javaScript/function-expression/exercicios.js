// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',','.')
console.log(priceNumber('R$ 99,99'))