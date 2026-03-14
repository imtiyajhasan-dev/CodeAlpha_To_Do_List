const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


// Load tasks from local storage on startup-------
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
renderTasks();


// add task-------------
addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text !== ""){
        tasks.push({
            text: text, completed: false 
        });
        taskInput.value = "";
        updateStorage();
        renderTasks();
    }
});


// render tasks to DOM------------
function renderTasks(){
    taskList.innerHTML= "";
    tasks.forEach((task, index)=> {
        const li = document.createElement('li');
        li.innerHTML = `<span class="task-test ${task.completed ? 'completed' : ''}" onclick="toggleTask(${index})">${task.text}</span>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// toggle completed stage-----------
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateStorage();
    renderTasks();
}


// delete task---------------
function deleteTask(index) {
    tasks.splice(index, 1);
    updateStorage();
    renderTasks();
}

// update localStorage------
function updateStorage() {
    localStorage.setItem('myTask', JSON.stringify(tasks));
}