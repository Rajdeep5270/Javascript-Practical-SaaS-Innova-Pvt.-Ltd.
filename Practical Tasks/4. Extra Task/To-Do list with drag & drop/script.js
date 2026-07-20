const allTasks = [];

const textInput = document.getElementById("textInput");
const tBody = document.getElementById("tBody");

function addData(event) {
    // console.log(textInput.value);;

    allTasks.push({
        id: Math.floor(Math.random() * 1000),
        task: textInput.value
    });

    viewTasks();
}

function viewTasks() {
    tBody.innerHTML = "";

    allTasks.forEach((task, idx) => {
        tBody.innerHTML += `
                            <tr id="${task.id}" draggable="true" ondragstart="dragStartHandler(event)">
                                <td>${idx + 1}</td>
                                <td>${task.task}</td>
                            </tr>
        `;
    })
}

viewTasks();

function dragStartHandler(event) {
    console.log(event.target);
    event.dataTransfer.setData('Text', event.target.id);
    console.log(event);
}

function dragOverHandler(event) {
    event.preventDefault();
    // console.log(event);
}

function dropHandler(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text/plain");
    const draggedRow = document.getElementById(id);

    event.target.appendChild(draggedRow);
}