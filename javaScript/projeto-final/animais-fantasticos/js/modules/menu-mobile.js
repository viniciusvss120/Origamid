import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuBotton, menuList, event) {
    this.menuBotton = document.querySelector(menuBotton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);

    // definie touchstart e click como argumento padrão de events caso o usuario não  defina
    if (event === undefined) {
      this.event = ['touchstart', 'click'];
    } else {
      this.event = event;
    }
  }

  openMenu(event) {
    event.preventDefault()
    this.menuList.classList.add(this.activeClass);
    this.menuBotton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.event, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBotton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.event.forEach((evento) => this.menuBotton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuBotton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
