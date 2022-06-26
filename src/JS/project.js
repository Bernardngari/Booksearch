//Declarations in the global scope.
const searchForm = document.querySelector( '#form' )
const input = document.querySelector( '#input' )
const searchTerm = input.value
let display = document.querySelector( '.displayArea' )
//let parent1=document.querySelector('#everyBook')

function urlCompiler (){
    const input = document.querySelector( '#input' )
    
    searchForm.addEventListener('submit',(event)=>{
      event.preventDefault()
    let searchTerm = input.value
    let  URL = `https://api.itbook.store/1.0/search/${searchTerm}`
    document.querySelector( '#displaySearchTerm' ).textContent = `You searched for books on ${searchTerm.toUpperCase()}`
      fetchAllBooks( URL )
    searchForm.reset()
    })
    }
urlCompiler()

function fetchAllBooks(URL){
  fetch( URL )
    .then( res => res.json() )
    .then(obj=>{
      let array = obj.books;
      array.forEach(element=>{
        displayBooks(element)
      })
    })
}

// function fetchAllBooks ()
// {
//   fetch(`https://api.itbook.store/1.0/search/javascript`)
//     .then( res => res.json() )
//     .then( obj =>
//     {
//       let array = obj.books;
//       array.forEach(element=>{
//         displayBooks(element)
//       })
//     })
// }
fetchAllBooks()

function displayBooks ( element )
{
  if ( element.price != '$0.00' )
  {
    let parent1 = document.createElement( 'div' )
    parent1.id = 'everyBook'
    let display = document.querySelector( '.displayArea' )
    let div1 = document.createElement( 'div' )
    let img = document.createElement( 'img' )
    img.Id = 'img'
    img.src = element.image
    div1.appendChild( img )
    parent1.appendChild( div1 )
    let div2 = document.createElement( 'div' )
    let div3 = document.createElement( 'div' )
    let div4 = document.createElement( 'div' )
    let div5 = document.createElement( 'div' )
    div2.className = 'book'
    div3.className = 'book'
    div4.className = 'book'
    div5.className = 'book'
    let p = document.createElement( 'p' )
    p.textContent = element.title
    div2.appendChild( p )
    parent1.appendChild( div2 )
    let p2 = document.createElement( 'p' )
    p2.textContent = element.subtitle
    div3.appendChild( p2 )
    parent1.appendChild( div3 )
    let p3 = document.createElement( 'p' )
    p3.textContent = element.price
    div4.appendChild( p3 )
    parent1.appendChild( div4 )
    let btn = document.createElement( 'button' )
    btn.className = 'button'
    btn.textContent = 'BUY NOW'
    div5.appendChild( btn )
    parent1.appendChild( div5 )
    display.appendChild( parent1 )
    form.addEventListener('mouseenter',(event)=>{
    parent1.remove()
})
     }   
  }


function addFavoriteBook ( event )
{
  event.preventDefault()
  let form2=document.querySelector('#form2')
  let ul = document.querySelector( '#ulAction' )
  let li4 = document.createElement( 'li' )
  li4.className="delete"
  ul.appendChild( li4 )
  let input2=document.querySelector( '#input2' )
  li4.textContent = `• ${ input2.value }`
  input2.style.background= "white"
  form2.reset()
}

document.querySelector('#form2').addEventListener('submit',addFavoriteBook)

document.querySelector( '#input2' ).addEventListener( 'keydown', (event) =>
{
  let input2 = document.querySelector( '#input2' );
  input2.style.background = "black"
  input2.style.color = "white"
})

function howItWorks ()
{
  document.querySelector('#hiw-li').addEventListener('mouseover',(event)=>{
    let target = document.querySelector( '#hiw' )
    target.style.display = "block"
  })
}
howItWorks()

function deleteFavorites ()
{
  document.querySelector( '#ulAction' ).addEventListener('click',(event)=>{
    let target = event.target;
    target.remove()
  })
}

deleteFavorites()

// form.addEventListener('mouseenter',(event)=>{
//   console.log( event );
//   parent1.remove()
// })