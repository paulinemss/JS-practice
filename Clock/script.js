
// get elements by ID

const hourHand = document.getElementById('hourHand'); 
const minuteHand = document.getElementById('minuteHand'); 
const secondHand = document.getElementById('secondHand'); 

// functions to set the time

function placeHour() {
    const now = new Date(); 
    const hour = now.getHours();
    const minute = now.getMinutes();  
    let hourDeg = (0.5 * (60 * hour + minute)) - 90; 
    hourHand.style.transform = `rotate(${hourDeg}deg)`; 
}; 

function placeMinute() {
    const now = new Date(); 
    const minute = now.getMinutes();
    let minuteDeg = (6 * minute) - 90; 
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`; 
}; 

function placeSecond() {
    const now = new Date(); 
    const second = now.getSeconds();
    let secondDeg = (6 * second) - 90; 
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 
}; 

window.setInterval(placeSecond, 1000); 
window.setInterval(placeMinute, 1000); 
window.setInterval(placeHour, 1000); 
