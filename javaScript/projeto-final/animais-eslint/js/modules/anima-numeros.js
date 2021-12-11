import initAnimacaoScroll from "./scroll-animacao";
export default class AnimaNumero {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
  }
  // Recebe um elemento do dom, com nímero em seu texto
  // incrementa a parti de 0 até o npumero final

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  // Ativa incrementar número para cada
  // número selecionado do dom

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      animaNumeros();
    }
  }
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    this.animaNumeros
  }
}
