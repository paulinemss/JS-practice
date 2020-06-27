const colorBlock = document.getElementById("colorBlock");
const colorInputTextOne = document.getElementById("colorInputTextOne");
const colorInputTextTwo = document.getElementById("colorInputTextTwo");
const horizontalButton = document.getElementById("horizontalDirection");
const verticalButton = document.getElementById("verticalDirection");
const radialButton = document.getElementById("radialDirection");
const diagonalButton = document.getElementById("diagonalDirection");

let gradDirection = 'to right'; 
let gradType = 'linear-gradient';

function changeColor() {
    const colorOne = colorInputTextOne.value; 
    const colorTwo = colorInputTextTwo.value;
    if (gradType == 'linear-gradient') {
        colorBlock.style.backgroundImage = `${gradType}(${gradDirection}, ${colorOne} , ${colorTwo})`;
    } else if (gradType == 'radial-gradient') {
        colorBlock.style.backgroundImage = `${gradType}(${colorOne} , ${colorTwo})`;
    };
    colorInputTextOne.style.border = `2px solid ${colorOne}`;
    colorInputTextTwo.style.border = `2px solid ${colorTwo}`;
};

function switchColor() {
    const colorOne = colorInputTextOne.value; 
    const colorTwo = colorInputTextTwo.value; 
    if (gradType == 'linear-gradient') {
        colorBlock.style.backgroundImage = `${gradType}(${gradDirection}, ${colorTwo} , ${colorOne})`;
    } else if (gradType == 'radial-gradient') {
        colorBlock.style.backgroundImage = `${gradType}(${colorTwo} , ${colorOne})`;
    };
    colorInputTextOne.value = colorTwo;
    colorInputTextTwo.value = colorOne; 
    colorInputTextOne.style.border = `2px solid ${colorTwo}`;
    colorInputTextTwo.style.border = `2px solid ${colorOne}`;
}; 

function changeDirection(str) {
    if (str == 'right') {
        gradType = 'linear-gradient';
        gradDirection = 'to right'; 
        changeColor(); 
    } else if (str == 'bottom') {
        gradType = 'linear-gradient';
        gradDirection = 'to bottom'; 
        changeColor(); 
    } else if (str == 'diagonal') {
        gradType = 'linear-gradient';
        gradDirection = 'to bottom left'; 
        changeColor(); 
    } else if (str == 'radial') {
        gradType = 'radial-gradient'; 
        changeColor(); 
    };
};

function removeActiveStates() {
    const elements = document.getElementsByClassName('direction-btn');
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i]);
        elements[i].classList.remove('active');
    }; 
};

function addActiveState(str) {
    removeActiveStates(); 
    if (str == 'horizontal') {
        horizontalButton.classList.add('active'); 
    } else if (str == 'vertical') {
        verticalButton.classList.add('active'); 
    } else if (str == 'radial') {
        radialButton.classList.add('active'); 
    } else if (str == 'diagonal') {
        diagonalButton.classList.add('active'); 
    };
};

colorInputTextOne.addEventListener('input', changeColor); 
colorInputTextTwo.addEventListener('input', changeColor); 
document.getElementById("randomBtn").addEventListener('click', switchColor); 
horizontalButton.addEventListener('click', function () {
    changeDirection('right');
    addActiveState('horizontal'); 
});
verticalButton.addEventListener('click', function () {
    changeDirection('bottom');
    addActiveState('vertical'); 
});
radialButton.addEventListener('click', function () {
    changeDirection('radial');
    addActiveState('radial'); 
});
diagonalButton.addEventListener('click', function () {
    changeDirection('diagonal');
    addActiveState('diagonal'); 
});
