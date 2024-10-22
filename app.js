function addTask() {
    let taskInput = document.getElementById('new-task').value;
    if (taskInput === '') {
        alert("Task cannot be empty!");
        return;
    }
    
    let taskList = document.getElementById('task-list');
    let newTask = document.createElement('li');

    // Create the checkbox for marking as complete
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', toggleComplete);  // Attach event listener to mark task as complete

    // Append the checkbox and task text
    newTask.appendChild(checkBox);
    newTask.innerHTML += taskInput;

    // Create the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);  // Attach the delete event

    // Append delete button to the task
    newTask.appendChild(deleteBtn);
    
    // Append task to the task list
    taskList.appendChild(newTask);
    
    // Clear input field after adding the task
    document.getElementById('new-task').value = '';
}

function toggleComplete(e) {
    // Toggle the "completed" class to strike through the text
    let taskItem = e.target.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(e) {
    // Remove the task
    let taskToDelete = e.target.parentElement;
    taskToDelete.remove();
}