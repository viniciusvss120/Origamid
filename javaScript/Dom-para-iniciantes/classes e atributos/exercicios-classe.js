
const menus = document.querySelectorAll('.menu a')

menus.forEach((item) => {
  return item.classList.add('ativo')
})

console.log(menu)

//2
menus.forEach((item) => {
  return item.classList.remove('ativo')
})

menus[0].classList.add('ativo')

//3

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(img, possuiAtributo)

})

//4
const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'https://www.google.com/')

console.log(link)