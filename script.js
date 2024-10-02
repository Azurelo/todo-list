// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener for adding a task
addTaskBtn.addEventListener("click", addTask);

//Add tasks
function addTask() {
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const listItem = document.createElement("li");

    // Create a span for the task text
    const taskSpan = document.createElement("p");
    taskSpan.textContent = taskText;

    // Add completion toggle to the task span
    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    // Append the task span and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";
}
