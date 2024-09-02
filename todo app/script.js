// Function to add a new task
function addTask() {
  const taskTitle = document.getElementById('task-title').value;
  const taskDateTime = document.getElementById('task-datetime').value;
  
  if (taskTitle === '') {
      alert('Task title cannot be empty!');
      return;
  }

  const taskList = document.getElementById('task-list');
  const listItem = document.createElement('li');

  listItem.innerHTML = `
      <span>${taskTitle} - ${taskDateTime}</span>
      <div class="task-actions">
          <button class="complete" onclick="completeTask(this)">Complete</button>
          <button class="edit" onclick="editTask(this)">Edit</button>
          <button class="delete" onclick="deleteTask(this)">Delete</button>
      </div>
  `;

  taskList.appendChild(listItem);

  // Clear the input fields
  document.getElementById('task-title').value = '';
  document.getElementById('task-datetime').value = '';
}

// Function to mark a task as complete
function completeTask(button) {
  const task = button.parentElement.parentElement;
  task.classList.toggle('completed');
}

// Function to edit a task
function editTask(button) {
  const task = button.parentElement.parentElement;
  const taskText = task.querySelector('span').textContent.split(' - ');
  
  const newTitle = prompt('Edit task title:', taskText[0]);
  const newDateTime = prompt('Edit task date and time:', taskText[1]);

  if (newTitle !== null && newDateTime !== null) {
      task.querySelector('span').textContent = `${newTitle} - ${newDateTime}`;
  }
}

// Function to delete a task
function deleteTask(button) {
  const task = button.parentElement.parentElement;
  task.remove();
}
