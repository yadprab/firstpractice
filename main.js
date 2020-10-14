
const container = document.querySelector('.container')
const seats = document.querySelectorAll(' .row-1 .seat:not(.occupied)');
const count = document.querySelector('#count')
const name = document.querySelector('#movie-name');
const total = document.querySelector('#total');
const classes = document.querySelector('#class');
const title = document.querySelector('#movie-title');
const modal = document.querySelector('.modal');
const proceed = document.querySelector('#proceed');
const over = document.querySelector('.overlay');
const pay = document.querySelector('#pay');
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

    pay.addEventListener('click', function(e){
        e.preventDefault();
        const store = JSON.stringify(user);
localStorage.setItem('userData', store);

  
    const id = document.querySelector('#userId');
    const seatN = document.querySelector('#seatNo');
    const movie = document.querySelector('#movie');
    const ttl = document.querySelector('#price');
 
   
    id.textContent = user.id;
    seatN.textContent = user.seatId;
    movie.textContent = user.movies;
    ttl.textContent = user.price
      
    if((name.value ==='pick your movie')|| (classes.value== 0)){
        window.alert('select movie and class')
       
         } else{
    
            modal.classList.add('modal-visible');
            over.classList.add('modal-hidden');
            const cont = document.querySelector('.content');
            setTimeout(()=>{
                cont.classList.add('modal-ani')
            
            }, 1000);
            
            
            proceed.addEventListener('click',function(e){
                e.preventDefault();
               
                
                modal.classList.remove('modal-visible');
                over.classList.remove('modal-hidden');
               
            
               
            
            
              
            })
            
            
    
    
        }
       
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
    const stId = dataStorage.seatId;
    console.log(dataStorage.seatId);

    if((stId.length>0) && (stId !== null)){
        seats.forEach((sts, index)=>{
            if(stId.indexOf(index)> -1){
                sts.classList.remove('selected')
              sts.classList.add('occupied')
            }
 
        })
     }
  
    
        
  
            
   
   

       
   
}
updateSeat()


