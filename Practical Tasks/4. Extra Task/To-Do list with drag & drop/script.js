let allTasks = [];

let draggedTaskId = null;

const textInput = document.getElementById("textInput");
const tBody = document.getElementById("tBody");

document.getElementById("addTaskBtn").addEventListener('click', e => {
    if (!textInput.value) {
        alert("Please enter a task.");
        return;
    }

    allTasks.push({
        id: Math.floor(Math.random() * 100),
        text: textInput.value
    });

    textInput.value = "";

    displayTasks();
})

function displayTasks() {

    tBody.innerHTML = "";

    if (allTasks.length === 0) {
        tBody.innerHTML = `
            <tr>
                <td colspan="2">No Tasks Found.</td>
            </tr>
        `;
        return;
    }

    allTasks.forEach((task, index) => {

        const row = document.createElement("tr");

        row.dataset.id = task.id;
        row.draggable = true;

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.text}</td>
        `;

        row.addEventListener("dragstart", startDrag);
        row.addEventListener("dragover", dragOver);
        row.addEventListener("drop", dropTask);

        row.addEventListener("dragleave", () => {
            row.classList.remove("drop-target");
        });

        row.addEventListener("dragend", () => {
            row.classList.remove("dragging");
        });

        tBody.appendChild(row);
    });
}

function startDrag(e) {

    draggedTaskId = Number(e.currentTarget.dataset.id);

    e.currentTarget.classList.add("dragging");
}

function dragOver(e) {

    e.preventDefault();

    e.currentTarget.classList.add("drop-target");
}

function dropTask(e) {
    e.preventDefault();

    const targetId = Number(e.currentTarget.dataset.id);

    e.currentTarget.classList.remove("drop-target");

    if (draggedTaskId === targetId) return;

    const fromIndex = allTasks.findIndex(task => task.id === draggedTaskId);
    const toIndex = allTasks.findIndex(task => task.id === targetId);

    if (fromIndex === -1 || toIndex === -1) return;

    const [draggedTask] = allTasks.splice(fromIndex, 1);

    allTasks.splice(toIndex, 0, draggedTask);

    draggedTaskId = null;

    displayTasks();
}

displayTasks();