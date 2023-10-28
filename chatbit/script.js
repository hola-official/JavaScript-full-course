function addTask() {
    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    if (!task) {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `<span>Task:</span>${task} <br>
                    <span>Description:</span>${description} <br>
                    <span>Date:</span>${date} <br>
                    <span>Time:</span>${time}`;
  
    taskList.appendChild(li);
  
    document.getElementById('task').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
  }
  