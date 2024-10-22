function addTask() {
    let taskInput = document.getElementById('new-task').value;
    if (taskInput === '') {
        alert("Task cannot be empty!");
        return;
    }
    
    let taskList = document.getElementById('task-list');
    let newTask = document.createElement('li');
    newTask.innerHTML = taskInput;
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = deleteTask;  // Error: deleteTask function not defined
    
    newTask.appendChild(deleteBtn);
    
    taskList.appendChild(newTask);
    document.getElementById('new-task').value = '';
}

function deleteTask(e) {
    // Deletes task (but the event handler doesn't work properly)
    e.target.parentElement.remove();
}

// To be implemented: 
// - Marking tasks as completed (toggle feature)
// - Error in deleteTask() handling (sometimes doesn't remove the task correctly)
