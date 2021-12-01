import outsideClick from "./outsideclick.js";

export default function initMenuMobile(){
    const menuBotton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']
    if(menuBotton){
        function openMenu(event){
            menuList.classList.add('active')
            menuBotton.classList.add('active')
            outsideClick(menuList,eventos, () => {
                menuList.classList.remove('active')
                menuBotton.classList.remove('active')
            })
        }
        
        eventos.forEach((userEvent) =>{
          menuBotton.addEventListener('click', openMenu)
        
        })

    }

}

