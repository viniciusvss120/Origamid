import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, event) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // definie touchstart e click como argumento padrão de events caso o usuario não defina
    if (event === undefined) {
      this.event = ['touchstart', 'click'];
    } else {
      this.event = event;
    }
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownMenu  e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(event.currentTarget, this.event, () => {
      element.remove('active');
    });
  }

  // adiciona os eventos ao DropdownMenu
  addDropdownMenus() {
    this.dropdownMenus.forEach((menu) => {
      this.event.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenus();
    }
    return this;
  }
}
