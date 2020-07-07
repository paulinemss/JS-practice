
// current time variables

const now = new Date(); 
const hour = now.getHours(); 
const minute = now.getMinutes(); 
const second = now.getSeconds(); 
let hourDeg = -90; 
let minuteDeg= -90; 
let secondDeg= -90; 

// get element by ID

const hourHand = document.getElementById('hourHand'); 
const minuteHand = document.getElementById('minuteHand'); 
const secondHand = document.getElementById('secondHand'); 

// functions to set the time

function placeHour() {
    let i = 0; 
    do {
        hourDeg += 30; 
        i++;
    } while (i<hour); 
    hourHand.style.transform = `rotate(${hourDeg}deg)`; 
}; 

function placeMinute() {
    let i = 0; 
    do {
        minuteDeg += 6; 
        i++;
    } while (i<minute); 
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`; 
}; 

function placeSecond() {
    let i = 0; 
    do {
        secondDeg += 6; 
        i++;
    } while (i<second); 
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 
}; 

placeHour(); 
placeMinute(); 
placeSecond();

// functions to animate the hands

function moveSecond() {
    secondDeg += 6; 
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 
}; 

window.setInterval(moveSecond, 1000); 
