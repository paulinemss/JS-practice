const categories = ['Buffy', 'Horror Movies', 'Pop Artists', 'Difficult Words', 'Halloween']; 
const words = [
    ['Slayer', 'Spike', 'Sunnydale', 'Willow', 'Watcher'],
    ['The Exorcist', 'Paranormal Activity', 'It Follows', 'Scream', 'Midsommar'],
    ['Ariana Grande', 'Lizzo', 'Beyonce', 'Lady Gaga', 'Rihanna'], 
    ['Bagpipes', 'Bookworm', 'Transcript', 'Awkward', 'Blizzard'],
    ['Witchcraft', 'Zombie', 'Cadaver', 'Cemetery', 'Ghoulish']
]; 
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

const hintWord = document.getElementById('hintWord'); 
const wordToFind = document.getElementById('wordToFind'); 
const btnsLetters = document.getElementsByClassName('btn-letter'); 
const failCountDiv = document.getElementById('failCount'); 
const mainTitle = document.getElementById('mainTitle'); 

let failCount = 0; 

const indexCateg = Math.floor(Math.random() * 5);
const indexWord = Math.floor(Math.random() * 5);

const rightCateg = categories[indexCateg]; 
const rightWord = words[indexCateg][indexWord]; 

const arrHiddenWord = []; 

function switchCategory() {
    hintWord.innerHTML = rightCateg; 
}; 

function switchWord() {
    const arrRightWord = rightWord.toLowerCase().split('');
    for (let i=0; i < arrRightWord.length; i++) {
        if (arrRightWord[i] === ' ') {
            arrHiddenWord.push(' '); 
        } else {
            arrHiddenWord.push('_'); 
        }
    }
    wordToFind.innerHTML = arrHiddenWord.join(''); 
}; 

function renderFailCount() {
    failCountDiv.innerHTML = failCount; 
    if (failCount > 0) {
        failCountDiv.style.color = '#ED6A5A'; 
    };
    if (failCount > 8) {
        mainTitle.innerHTML = 'Game over!'
        mainTitle.style.color = '#ED6A5A'; 
        wordToFind.innerHTML = rightWord; 
    }
}; 

function renderRightLetter(index, letter) {
    arrHiddenWord.splice(index, 1, letter); 
    wordToFind.innerHTML = arrHiddenWord.join(''); 
}; 

function checkLetter(num) {
    const letterClicked = alphabet[num]; 
    const arrRightWord = rightWord.toLowerCase().split(''); 
    let found = false; 
    for (let i=0; i < arrRightWord.length; i++) {
        if (arrRightWord[i] === letterClicked) {
            found = true; 
            btnsLetters[num].style.color = '#9BC1BC'; 
            btnsLetters[num].style.border = '2px solid #9BC1BC'; 
            renderRightLetter(i, letterClicked); 
            showWinning(); 
        }
    }
    if (!found) {
        failCount += 1; 
        renderFailCount(); 
        btnsLetters[num].style.color = '#ED6A5A'; 
        btnsLetters[num].style.border = '2px solid #ED6A5A'; 
    }  
}; 

for (let i=0; i < btnsLetters.length; i++) {
    btnsLetters[i].addEventListener('click', function () {
        checkLetter(i); 
    }); 
}; 

function showWinning() {
    let found = false; 
    for (let i=0; i < arrHiddenWord.length; i++) {
        if (arrHiddenWord[i] === '_') {
            found = true; 
        };
    }; 
    if (!found) {
        mainTitle.innerHTML = 'You won!';
        mainTitle.style.color = '#9BC1BC'; 
    };
}; 

switchCategory(); 
switchWord(); 
renderFailCount(); 