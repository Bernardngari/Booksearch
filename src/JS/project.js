const searchForm = document.querySelector( '#form' )
const input = document.querySelector( '#input' )
const searchTerm = input.value


function searchCompiler(){
    searchForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const input = document.querySelector( '#input' )
    const searchTerm = input.value
    const URL= `https://api.itbook.store/1.0/search/${searchTerm}`
    document.querySelector( '#displaySearchTerm' ).textContent = `You searched for books on ${ searchTerm.toUpperCase() }`
    fetchAllBooks( URL )
    searchForm.reset()
    })
    }
searchCompiler()
    
function fetchAllBooks ( URL )
{
  fetch( URL )
    .then( res => res.json() )
    .then( obj =>
    {
      let array = obj.books;
      array.forEach(element=>{
        displayBooks(element)
      })
      
    } )
}


function displayBooks ( element )
{
  if ( element.price != '$0.00' )
  {
    let parent = document.createElement( 'div' )
    parent.className='eachBook'
    let display = document.querySelector( '.displayArea' )
    let div1 = document.createElement( 'div' )
    let img = document.createElement( 'img' )
    img.Id = 'img'
    img.src = element.image
    div1.appendChild( img )
    parent.appendChild( div1 )
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
    parent.appendChild( div2 )
    let p2 = document.createElement( 'p' )
    p2.textContent = element.subtitle
    div3.appendChild( p2 )
    parent.appendChild( div3 )
    let p3 = document.createElement( 'p' )
    p3.textContent = element.price
    div4.appendChild( p3 )
    parent.appendChild( div4 )
    let btn = document.createElement( 'button' )
    btn.className = 'button'
    btn.textContent = 'BUY NOW'
    div5.appendChild( btn )
    parent.appendChild( div5 )
    display.appendChild(parent)

  }   
}

function addFavoriteBook ()
{
  let ul = document.querySelector( '#ulAction' )
  let li = document.createElement( 'li' )
  ul.appendChild( li )
  document.querySelector( '#input' ).value = li.textContent
  
}
