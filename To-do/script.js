const buttonAddTask = document.getElementById('buttonAddTask'); 
const addTaskForm = document.getElementById('addTaskForm'); 
const addTaskInput = document.getElementById('addTaskInput'); 
const buttonAddInput = document.getElementById('buttonAddInput'); 

const userInput = []; 
const checkedToDos = []; 

const now = new Date();
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

function checkDate() {
    const nowDay = daysOfTheWeek[now.getDay()]; 
    document.getElementById('nowDay').innerHTML = nowDay + ' ';
    const nowDate = now.getDate(); 
    document.getElementById('nowDate').innerHTML = nowDate;
}

function addTask() {
    if (addTaskForm.style.display === 'none') {
        addTaskForm.style.display = 'block';
    } else {
        addTaskForm.style.display = 'none';
    }
}

function addInput() {
    if (addTaskInput.value != '') {
        userInput.unshift(addTaskInput.value); 
        renderToDo(); 
        addTask();
    }
    addTaskInput.value = ''; 
}

function checkUncheck(val) {
    let elementIndex = checkedToDos.indexOf(val); 
    if (elementIndex === -1) {
        checkedToDos.push(val); 
    } else {
        checkedToDos.splice(elementIndex, 1); 
    }
    renderToDo(); 
}

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

checkDate(); 
buttonAddTask.addEventListener('click', addTask); 
buttonAddInput.addEventListener('click', addInput); 