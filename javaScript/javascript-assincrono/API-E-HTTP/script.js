//fetch('https://pokeapi.co/api/v2/pokemon/')
//.then(r => r.json())
//.then(pokemon => {
//  console.log(pokemon)
//})

const url = 'https://jsonplaceholder.typicode.com/posts'
const options = {
  method: 'POST',
  body:'{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
}

fetch(url, options)
.then(r => r.json())
.then(json => console.log(json))


//

const url2 = 'https://www.google.com'

fetch(url)
.then(r => r.text()).then(json => console.log(json))