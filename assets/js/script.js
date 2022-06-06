// Identify HTML elements as objects
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Function to create a new task item on a button click
var createTaskHandler = function () {
    // Create a list item
    var listItemEl = document.createElement("li");
    // Assign a class name to apply CSS style to the item created
    listItemEl.className = "task-item";
    // Insert text content in the item created
    listItemEl.textContent = "This is a new task.";
    // Insert the item created into the HTML document
    tasksToDoEl.appendChild(listItemEl);
};

// ON CLICK
buttonEl.addEventListener("click", createTaskHandler);