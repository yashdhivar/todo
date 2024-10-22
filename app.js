function addTask() {
    let taskInput = document.getElementById('new-task').value;
    if (taskInput === '') {
        alert("Task cannot be empty!");
        return;
    }

    let taskList = document.getElementById('task-list');
    let newTask = document.createElement('li');
    newTask.innerHTML = taskInput;

    // Create the Edit button
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click', editTask);  // Attach event listener to edit the task

    // Create the Delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);  // Attach event listener to delete the task

    // Append the Edit and Delete buttons to the task
    newTask.appendChild(editBtn);
    newTask.appendChild(deleteBtn);
    
    // Append the task to the task list
    taskList.appendChild(newTask);

    // Clear input field after adding the task
    document.getElementById('new-task').value = '';
}

function editTask(e) {
    let taskItem = e.target.parentElement;
    let taskText = taskItem.firstChild;  // First child is the task text

    // Create an input field to replace the task text
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = taskText.textContent;
    taskItem.insertBefore(inputField, taskText);  // Insert input field before the text
    taskItem.removeChild(taskText);  // Remove the original task text

    // Create a Save button
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'Save';
    saveBtn.addEventListener('click', function() {
        saveTask(inputField, taskItem);
    });

    // Replace Edit button with Save button
    e.target.replaceWith(saveBtn);
}

function saveTask(inputField, taskItem) {
    let newTaskText = document.createTextNode(inputField.value);  // Create new text node with the edited value
    taskItem.insertBefore(newTaskText, inputField);  // Insert the new text before the input field
    taskItem.removeChild(inputField);  // Remove the input field

    // Replace Save button back with Edit button
    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click', editTask);
    taskItem.querySelector('button').replaceWith(editBtn);  // Replace Save with Edit
}