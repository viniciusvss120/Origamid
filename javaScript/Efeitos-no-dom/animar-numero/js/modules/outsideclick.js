export default function outsideClick(element, events ,calback){
  const html = document.documentElement
  const outside = 'data-outside'

  if(!element.hasAttribute(outside)){
    events.forEach(userEvent => {
     setTimeout(() =>{ html.addEventListener('click', handleOutsideClick)})

    })
    element.setAttribute(outside, '')
  }
  function handleOutsideClick(event){
    //console.log(event.target)
    if(!element.contains((event.target))){
      events.forEach(userEvent => {
        element.removeAttribute(outside, '') 
      })

      html.removeEventListener('click', handleOutsideClick)
      calback()

    }
  }
}