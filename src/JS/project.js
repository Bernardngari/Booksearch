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