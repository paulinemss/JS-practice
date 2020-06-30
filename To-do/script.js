// variables from ID 

const buttonAddTask = document.getElementById('buttonAddTask'); 
const addTaskForm = document.getElementById('addTaskForm'); 
const addTaskInput = document.getElementById('addTaskInput'); 
const buttonAddInput = document.getElementById('buttonAddInput'); 

// user data arrays

let userInput = []; 
let checkedToDos = []; 

// variables for current date 

const now = new Date();
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

// function to check the date and render it on the page

function checkDate() {
    const nowDay = daysOfTheWeek[now.getDay()]; 
    document.getElementById('nowDay').innerHTML = nowDay + ' ';
    const nowDate = now.getDate(); 
    document.getElementById('nowDate').innerHTML = nowDate;
}

// function to show/hide the add task window 

function addTask() {
    if (addTaskForm.style.display === 'none') {
        addTaskForm.style.display = 'block';
        document.getElementById('allToDos').style.height = '50vh'; 
    } else {
        addTaskForm.style.display = 'none';
        document.getElementById('allToDos').style.height = '70vh'; 
    }
}

// function to add input from the form into a to-do element

function addInput() {
    if (addTaskInput.value !== '') {
        userInput.unshift(addTaskInput.value); 
        renderToDo(); 
        addTask();
        localStorage.setItem('userInput', JSON.stringify(userInput));
    }
    addTaskInput.value = ''; 
}

// function to check/uncheck boxes in the to-do elements 

function checkUncheck(val) {
    let elementIndex = checkedToDos.indexOf(val); 
    if (elementIndex === -1) {
        checkedToDos.push(val); 
        localStorage.setItem('checkedToDos', JSON.stringify(checkedToDos));
    } else {
        checkedToDos.splice(elementIndex, 1); 
        localStorage.setItem('checkedToDos', JSON.stringify(checkedToDos));
    }
    renderToDo(); 
}

// function to create a to-do element based on the form input 

function renderToDo() {
    let str = '';
    for (let i=0; i<userInput.length; i++) {
        let todo = userInput[i];

        if (checkedToDos.indexOf(todo) === -1) {
            str += `<section class="todo">
            <div class ="todo_checkbox">
                <button onclick="checkUncheck('${todo}')"><i class="far fa-square"></i></button>
            </div>
            <div class="todo_description unchecked">
                ${todo}
            </div>
            </section>`; 
        } else {
            str += `<section class="todo">
            <div class ="todo_checkbox">
                <button onclick="checkUncheck('${todo}')"><i class="far fa-check-square"></i></button>
            </div>
            <div class="todo_description checked">
                ${todo}
            </div>
            </section>`; 
        }
    }
    document.getElementById('allToDos').innerHTML = str;
}

// get user input from local storage

function loadInitialData() {
    if (localStorage.getItem('userInput')) {
        userInput = JSON.parse(localStorage.getItem('userInput')); 
        renderToDo(); 
    };
    if (localStorage.getItem('checkedToDos')) {
        checkedToDos = JSON.parse(localStorage.getItem('checkedToDos')); 
        renderToDo();
    };
}

// call functions and event listeners 

checkDate(); 
loadInitialData(); 
buttonAddTask.addEventListener('click', addTask); 
buttonAddInput.addEventListener('click', addInput); 