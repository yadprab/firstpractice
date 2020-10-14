
const container = document.querySelector('.container')
const seats = document.querySelectorAll(' .row-1 .seat:not(.occupied)');
const count = document.querySelector('#count')
const name = document.querySelector('#movie-name');
const total = document.querySelector('#total');
const classes = document.querySelector('#class');
const title = document.querySelector('#movie-title')
let price = parseInt(classes.value);
let movieName = name.value;
populateUI();

const seatArr = Array.from(seats);

function updateSeat(){
    const selected = document.querySelectorAll('.row-1 .seat.selected');
    const slt = selected.length;
    const selectedSeats = [...selected].map(seatNo => [...seats].indexOf(seatNo));

    // console.log(selectedSeats);
   
    count.innerText = slt
    total.innerText = slt * price;
    title.innerText = movieName;
    const totalPrice = slt * price;
    // console.log(totalPrice);


    class Data{
        constructor(id, movies, price, seats, seatId) {
            this.id = id;
            this.movies =  movies;
            this.price = price;
            this.seats = seats;
            this.seatId = seatId;
            
        }
        
    }
const userId = randomNum()
    
const user = new Data(userId,movieName,totalPrice, slt, selectedSeats);
const store = JSON.stringify(user);
localStorage.setItem('userData', store);
  const pay = document.querySelector('#pay')
    const modal = document.querySelector('.modal');
    const proceed = document.querySelector('#proceed');
    const id = document.querySelector('#userId');
    const seatN = document.querySelector('#seatNo');
    const movie = document.querySelector('#movie');
    const ttl = document.querySelector('#price');
   
    id.textContent = user.id;
    seatN.textContent = user.seatId;
    movie.textContent = user.movies;
    ttl.textContent = user.price
 

    pay.addEventListener('click', function(e){
        e.preventDefault();
        modal.classList.add('modal-visible');
        const cont = document.querySelector('.content');
        setTimeout(()=>{
            cont.classList.add('modal-ani')

        }, 1000)

        proceed.addEventListener('click',function(e){
            e.preventDefault();
            modal.classList.remove('modal-visible');
        })


      
     })
    
}
container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }

    updateSeat();
  


})

classes.addEventListener('change', function(e){
    price = parseInt(e.target.value);
    updateSeat();
})

name.addEventListener('change', function(e){
  
   movieName = e.target.value
    updateSeat();
})

function randomNum(){
    return Math.floor(Math.random()* 100) +1;
}

function populateUI(){
    const dataStorage = JSON.parse(localStorage.getItem('userData'));
    console.log(dataStorage );
    console.log(dataStorage.movies);
   
}
updateSeat();

