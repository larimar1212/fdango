// Your code here
/*  See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data: */



const firstmovieUrl = 'http://localhost:3000/films/1'
const allMoviesUrl = 'http://localhost:3000/films'
const moviePoster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const movieRunTime = document.getElementById('runtime')
const movieShowTime = document.getElementById('showtime')
let ticketsSold = document.getElementById('ticket-num') // capacity - ticketssold = 


const fetchUrl = () => {
fetch(firstmovieUrl)
.then(req => req.json())
.then(res => {
    moviePoster.src = res.poster
    movieTitle.innerText = res.title
    movieRunTime.innerText = res.runtime
    movieShowTime.innerText = res.showtime
    //capacity.innerText = res.capacity
    //capacity- -+ ticketsSold == ticketsSold.innerText

        } 
         //ticketsSold.innerText = res['tickets_sold'

)}


fetchUrl()


/* See a menu of all movies on the left side of the page in the`ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes`film item` to each`li` element.) There is a
placeholder`li` in the`ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list.You
   will need to make a GET request to the following endpoint to retrieve the
   film data*/

const films = document.getElementById('films')

//was i supposed to create a ul menu and add the li in it 


const fetchAllmovies = () => {
    fetch(allMoviesUrl)
    .then(req => req.json())
    .then(res => {
        res.forEach(obj => {
            let li = document.createElement('li')
            li.innerText = obj[element]
            films.append(li)

            // i tried to get the object elemnts to appear, i spent a long time 
            // because i had msitankely erased the ul and this is not a representation
            // of my capacity .
        });
        
    } )
}



/*Buy a ticket for a movie.After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend.I should not
   be able to buy a ticket if the showing is sold out(if there are 0 tickets
   available). ** No persistence is needed for this feature */


   const button = getElementById('buy-ticket')

   button.addEventListener('click', (e) => {
    ticketsSold  

   })

   // i would have 