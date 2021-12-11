import initAnimaNumero from './anima-numeros.js';

// cria a div contendo informações com o total de animais.
export default function fecthAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  
   function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
   }
  // puxa os animais através de um arquivo json e cria cada animal utilizando createAnimais
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de Json, ative as funções para preencher e animar os numeros
      animaisJSON.forEach(() => preencherAnimais(animal));
      animaAnimaisNumeros();      
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais()

}
