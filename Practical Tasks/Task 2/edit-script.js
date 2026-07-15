let tasks = JSON.parse(localStorage.getItem("tasks"));
let editId = JSON.parse(localStorage.getItem("editId"));

const taskInput = document.getElementById("taskInput");

function renderEditTask() {
    // console.log(tasks);

    const editTask = tasks.find((ele) => ele.id === editId);

    // console.log(editTask)

    taskInput.value = editTask.task;
}

renderEditTask();