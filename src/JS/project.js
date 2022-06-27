let display = document.querySelector( '.displayArea' )
//Compiles URL depending on user search
function urlCompiler ( suffix = 'javascript' )
{
  const searchForm = document.querySelector( '#form' );
  searchForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const input = document.querySelector( '#input' )
    let searchTerm = input.value;
    let URL = `https://api.itbook.store/1.0/search/${ searchTerm }`
    fetchAllBooks( URL )
    searchForm.reset()
  })
  let URL = 'https://api.itbook.store/1.0/search/javascript'
  fetchAllBooks(URL)
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

function displayBooks ( element )
{
  if ( element.price != '$0.00' )//Eliminates the books with a price of $0.00, and are not loaded to DOM.
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
    form.addEventListener('mouseenter',(event)=>{//Removes the previously loaded books on mouse entering the form.
    parent1.remove()
    document.querySelector( '#displaySearchTerm' ).textContent= 'Search more books below.'
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
//The function below creates an unexpected bug when deleting favorite books. Will be fixed soon
// function clickBookToFavorite(){
//   display.addEventListener('click',(event)=>{
//     let target = event.target;
//     let booktitle = target.innerText;
//     let li4 = document.createElement( 'li' )
//     li4.className ='delete'
//     li4.textContent = booktitle;
//     document.querySelector( '#ulAction' ).appendChild(li4)
//   })
// }
// clickBookToFavorite