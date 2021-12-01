export default function initAnimaNumero(){
    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]')
        console.log(numeros)
        
        numeros.forEach((numero) =>{
            const total = +numero.innerText
            const incremento = Math.floor( total / 100)
            let start = 0
            const timer = setInterval(() => {
                start += incremento
                numero.innerText = start
                if(start > total){
                    numero.innerText = total
                    clearInterval(timer)
                }
            },25 * Math.random())
            
        })
    
    }
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect()
            animaNumeros()
        }
    }
    
    const observerTarget = document.querySelector('.numero')
    
    const observer = new MutationObserver(handleMutation)
    
    observer.observe(observerTarget, {attributes: true})

}
