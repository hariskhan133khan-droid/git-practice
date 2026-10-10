
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement("li");

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "selectedTask";
    radioButton.value = taskText;

    newTask.appendChild(radioButton);
    newTask.appendChild(document.createTextNode(" " + taskText));

    taskList.appendChild(newTask);

    taskInput.value = "";
});

deleteTaskBtn.addEventListener("click", function () {
    const selectedTask = document.querySelector(
        'input[name="selectedTask"]:checked'
    );

    if (selectedTask === null) {
        alert("Please select a task to delete!");
        return;
    }

    selectedTask.parentElement.remove();
});s