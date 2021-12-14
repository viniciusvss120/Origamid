export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }
  // ativa a taba de acordo com a index

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('ativo', direcao);
  }

  // adiciona os eventos nas tabs

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
