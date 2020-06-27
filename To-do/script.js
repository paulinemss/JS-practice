const buttonAddTask = document.getElementById('buttonAddTask'); 
const addTaskForm = document.getElementById('addTaskForm'); 

function addTask() {
    if (addTaskForm.style.display === "none") {
        addTaskForm.style.display = "block";
    } else {
        addTaskForm.style.display = "none";
    }
}

buttonAddTask.addEventListener('click', addTask); 