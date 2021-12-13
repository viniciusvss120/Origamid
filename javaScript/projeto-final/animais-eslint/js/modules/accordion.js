export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    console.log(this.accordionList);
    this.ativoClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.ativoClass);
    item.nextElementSibling.classList.toggle(this.ativoClass);
  }
  // adiciona os eventos do accordion

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }
  // iniciar função

  init() {
    if (this.accordionList.length) {
      // ativar primerio item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
