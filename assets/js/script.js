// Identify HTML elements as objects
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// Function to target and store elements and values from the HTML document
var taskFormHandler = function (event) {
    // Tell the browswer not to follow its default behavior of updating the page
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up date as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};


// Function to create a new task item on a button click
var createTaskEl = function (taskDataObj) {
    // Create a list item
    var listItemEl = document.createElement("li");
    // Assign a class name to apply CSS style to the item created
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

// ON CLICK
formEl.addEventListener("submit", taskFormHandler);