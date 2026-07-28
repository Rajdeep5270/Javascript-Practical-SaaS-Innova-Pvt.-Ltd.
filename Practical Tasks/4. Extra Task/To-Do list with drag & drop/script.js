let allTasks = [];

const textInput = document.getElementById("textInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tBody = document.getElementById("tBody");

let draggedTaskId = null;

function addTask() {
    let task = textInput.value.trim();

    if (task == "") {
        message.textContent = "Please enter a task.";
        return;
    }

    let newTask = {
        id: Date.now(),
        text: task
    };

    allTasks.push(newTask);

    textInput.value = "";

    displayTasks();
}

function displayTasks() {
    tBody.innerHTML = "";

    if (allTasks.length == 0) {
        let row = document.createElement("tr");
        row.innerHTML = "<td colspan='2'>No tasks available.</td>";
        tBody.appendChild(row);
        return;
    }

    for (let i = 0; i < allTasks.length; i++) {
        let row = document.createElement("tr");

        row.dataset.id = allTasks[i].id;
        row.draggable = true;

        row.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + allTasks[i].text + "</td>";

        row.addEventListener("dragstart", startDrag);
        row.addEventListener("dragover", dragOver);
        row.addEventListener("drop", dropTask);
        row.addEventListener("dragleave", function () {
            row.classList.remove("drop-target");
        });

        tBody.appendChild(row);
    }
}

function startDrag(e) {
    draggedTaskId = Number(e.target.dataset.id);
    e.target.classList.add("dragging");
}

function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("drop-target");
}

function dropTask(e) {
    e.preventDefault();

    let targetId = Number(e.currentTarget.dataset.id);

    e.currentTarget.classList.remove("drop-target");

    if (draggedTaskId == targetId) {
        return;
    }

    let from = -1;
    let to = -1;

    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id == draggedTaskId) {
            from = i;
        }
        if (allTasks[i].id == targetId) {
            to = i;
        }
    }

    if (from == -1 || to == -1) {
        return;
    }

    let temp = allTasks[from];
    allTasks.splice(from, 1);
    allTasks.splice(to, 0, temp);

    draggedTaskId = null;
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);

textInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

displayTasks();