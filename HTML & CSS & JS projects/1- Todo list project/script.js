/*
  Author: Mahmoud Esmat
  date  : 2-11-2025
*/

// =================== Global variables ===================
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let tasksContainer = document.getElementById("tasks");
let taskInput = document.querySelector("#task-input input");

// Add button
let addBtn = document.getElementById("btn-add");

// Appear buttons
let appearAllBtn = document.querySelector(".btn-all");
let appearDoneBtn = document.querySelector(".btn-done");
let appearTodoBtn = document.querySelector(".btn-todo");

// Delete buttons
let deleteDoneBtn = document.querySelector(".done-task-delete");
let deleteAllBtn = document.querySelector(".all-tasks-delete");

// =================== Events ===================
addBtn.addEventListener("click", () => {
  let newDate = new Date().toLocaleString();

  if (taskInput.value === "") return;
  let newTask = {
    content: taskInput.value,
    date: newDate,
    done: false,
  };

  tasks.push(newTask);
  taskInput.value = "";
  displayTasks();
});

appearAllBtn.addEventListener("click", () => {
  displayTasks();
});

deleteAllBtn.addEventListener("click", () => {
  tasks.length = 0;
  saveTasks();
  displayTasks();
});

appearDoneBtn.addEventListener("click", () => {
  tasksContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    if (task.done) {
      tasksContainer.innerHTML += taskHTML(task, index);
    }
  });
});

deleteDoneBtn.addEventListener("click", () => {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].done) {
      tasks.splice(i, 1);
    }
  }
  saveTasks();
  displayTasks();
});

appearTodoBtn.addEventListener("click", () => {
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    if (!task.done) {
      tasksContainer.innerHTML += taskHTML(task, index);
    }
  });
});

// =================== Functions ===================
function displayTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    tasksContainer.innerHTML += taskHTML(task, index);
  });
  saveTasks();
}

function taskHTML(task, index) {
  return `
    <div class="task">
      <div class="head">
        <p class="title ${task.done ? "done-text" : ""}">
          ${task.content}
        </p>
        <div class="date">
          <span class="material-symbols-outlined">date_range</span>
          <p>${task.date}</p>
        </div>
      </div>
      <div class="operations">
        <button onclick="isChecked(${index})" class="btn-check-box">
          <span class="material-symbols-outlined">
            ${task.done ? "check_box" : "check_box_outline_blank"}
          </span>
        </button>
        <button onclick="toEdit(${index})" class="btn-edit">
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button onclick="toDelete(${index})" class="btn-delete">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
    `;
}

function isChecked(index) {
  tasks[index].done = !tasks[index].done;
  displayTasks();
}

function toDelete(index) {
  if (confirm(`do you want to remove "${tasks[index].content} task" ?`)) {
    // delete tasks[index];
    tasks.splice(index, 1);
    displayTasks();
  }
}

function toEdit(index) {
  let editedTask = prompt("Edit your task:", tasks[index].content);
  let newDate = new Date().toLocaleString();

  if (editedTask !== null) {
    tasks[index].content = editedTask;
    tasks[index].date = newDate;
    displayTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =================== Initial call ===================
displayTasks();
