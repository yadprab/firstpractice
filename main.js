
const container = document.querySelector('.container')
const seats = document.querySelectorAll(' .row-1 .seat:not(.occupied)');
const count = document.querySelector('#count')
const name = document.querySelector('#movie-name');
const total = document.querySelector('#total');
const classes = document.querySelector('#class');
const title = document.querySelector('#movie-title')
let price = parseInt(classes.value);
let movieName = title.value
console.log(price);
const seatArr = Array.from(seats);
console.log(seatArr);

console.log(title);
function updateSeat(){
    const selected = document.querySelectorAll('.row-1 .seat.selected');
    const slt = selected.length;
    count.innerText = slt
    total.innerText = slt * price;
    title.innerText = movieName;
    
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