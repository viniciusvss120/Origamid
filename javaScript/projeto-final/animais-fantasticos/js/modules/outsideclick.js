export default function outsideClick(element, events, calback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains((event.target))) {
      events.forEach(() => {
        element.removeAttribute(outside, '');
      });

      html.removeEventListener('click', handleOutsideClick);
      calback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach(() => {
      setTimeout(() => html.addEventListener('click', handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
