// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Array of tasks
let tasks = [];

// Event listener for adding a task
addTaskBtn.addEventListener("click", addTask);

// Function to render the tasks
function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("p");
        taskSpan.textContent = task.text;

        // Toggle completion
        if (task.completed) {
            taskSpan.classList.add("completed");
        }

        taskSpan.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed; // Toggle task completion
            renderTasks(); 
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.width = '100px'
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter((_, i) => i !== index); // Remove task from array
            renderTasks(); 
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    });
}

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    try {
        // Validate input
        if (taskText === "") {
            throw new Error("Task cannot be empty!");
        }

        // Add task to the array
        tasks.push({ text: taskText, completed: false });
        renderTasks(); // Re-render tasks

        // Clear input
        taskInput.value = "";

    } catch (error) {
        alert(error.message); // Handle the error by showing an alert
    }
}
