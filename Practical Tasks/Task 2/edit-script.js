let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let editId = JSON.parse(localStorage.getItem("editId"));

const taskInput = document.getElementById("taskInput");

const editTask = tasks.find((ele) => ele.id === editId);

taskInput.value = editTask.task;


function updateEditedTask() {
    // console.log(taskInput.value);

    editTask.task = taskInput.value;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    window.location.href = "view-task.html"
}
