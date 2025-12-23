// Load tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

document
    .getElementById("submitTask")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let task = document.getElementById("addTask").value.trim();
        if (task) {
            addTaskToDOM(task, false); // false = not completed
            saveTaskToStorage(task, false);
            document.getElementById("addTask").value = "";
        } else {
            alert("Please !! Type Some Task to Add");
        }
    });

// Toggle complete status
document
    .getElementById("tasksList")
    .addEventListener("click", function (event) {
        if (event.target && event.target.matches(".task")) {
            event.target.classList.toggle("complete");

            // Update localStorage when task is toggled
            updateTaskStatus(event.target.textContent.replace("Delete", "").trim());
        }
    });

// Delete task
document
    .getElementById("tasksList")
    .addEventListener("click", function (event) {
        if (
            event.target.parentElement &&
            event.target.parentElement.matches(".task")
        ) {
            let task = event.target.parentElement;
            let taskText = task.textContent.replace("Delete", "").trim();
            task.remove();

            // Remove from localStorage
            deleteTaskFromStorage(taskText);
        }
    });

// Function to add task to DOM
function addTaskToDOM(taskText, isCompleted) {
    let btn = document.createElement("button");
    let addT = document.createElement("li");
    btn.classList.add("btn");
    addT.classList.add("task");

    if (isCompleted) {
        addT.classList.add("complete");
    }

    btn.textContent = "Delete";
    addT.textContent = taskText;
    addT.append(btn);
    document.getElementById("tasksList").appendChild(addT);
}

// Function to save task to localStorage
function saveTaskToStorage(taskText, isCompleted) {
    let tasks = getTasksFromStorage();
    tasks.push({ text: taskText, completed: isCompleted });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to get tasks from localStorage
function getTasksFromStorage() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Function to load all tasks from localStorage
function loadTasks() {
    let tasks = getTasksFromStorage();
    tasks.forEach((task) => {
        addTaskToDOM(task.text, task.completed);
    });
}

// Function to update task completion status
function updateTaskStatus(taskText) {
    let tasks = getTasksFromStorage();
    let taskIndex = tasks.findIndex((task) => task.text === taskText);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Function to delete task from localStorage
function deleteTaskFromStorage(taskText) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter((task) => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}