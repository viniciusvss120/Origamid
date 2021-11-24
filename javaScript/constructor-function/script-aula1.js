/*
const Dom = {
    seletor: 'li',
    element() {
      return document.querySelector(this.seletor)
    },
    ativar() {
        const elementoSelecionado = this.element()
        elementoSelecionado.classList.add('ativar')
    }
}
*/

function Dom(seletor) {
    this.element = function() {
      return document.querySelector(seletor)
    }
    this.ativar = function() {
        const elementoSelecionado = this.element()
        elementoSelecionado.classList.add('ativar')
    }
}

const li = new Dom('li')
const ul = new Dom('ul')

const lastLi = new Dom('li:last-child')
lastLi.ativar()

