import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initiModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fecthAnimais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initiModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();

fetchAnimais('../../animaisapi.json', 'numeros-grid')
