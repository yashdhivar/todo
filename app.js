function addTask() {
    let taskInput = document.getElementById('new-task').value;
    if (taskInput === '') {
        alert("Task cannot be empty!");
        return;
    }
    
    let taskList = document.getElementById('task-list');
    let newTask = document.createElement('li');
    newTask.innerHTML = taskInput;

    // Create the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);  // Attach the delete event properly

    // Append delete button to the task
    newTask.appendChild(deleteBtn);
    
    // Append task to the task list
    taskList.appendChild(newTask);
    
    // Clear input field after adding the task
    document.getElementById('new-task').value = '';
}

function deleteTask(e) {
    // Ensure the task is removed correctly by targeting the parent element (the <li>)
    let taskToDelete = e.target.parentElement;  
    taskToDelete.remove();  // Removes the task
}
