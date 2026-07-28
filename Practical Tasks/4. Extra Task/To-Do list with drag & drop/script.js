let allTasks = [];

const textInput = document.getElementById("textInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tBody = document.getElementById("tBody");

let draggedTaskId = null;

function addTask() {
    if (task.value == "") {
        alert("Please enter a task.")
        return;
    }

    allTasks.push({
        id: Math.floor(Math.random() * 100),
        text: task.value
    });

    textInput.value = "";

    displayTasks();
}

function displayTasks() {
    tBody.innerHTML = "";

    if (allTasks.length == 0) {
        tBody.innerHTML = `<tr>
            <td colspan="2">No Tasks Found.</td>
        </tr>`
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