let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">❌</button>
      </li>
    `;
  });
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <div>
          <button onclick="editTask(${index})">✏️</button>
          <button onclick="deleteTask(${index})">❌</button>
        </div>
      </li>
    `;
  });
}
function editTask(index) {
  let newTask = prompt("Edit your task:", tasks[index]);
  if (newTask !== null && newTask !== "") {
    tasks[index] = newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}