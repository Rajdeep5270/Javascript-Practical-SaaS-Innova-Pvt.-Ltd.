// comments are for debugging 

let tasks = JSON.parse(localStorage.getItem('tasks'));

function viewTask() {
    const tBody = document.getElementById("tBody");

    tBody.innerHTML = "";

    if (tasks.length < 1) {
        tBody.innerHTML = `<h4 style="text-align:center; margin:10px 0; font-size:20px;">No Data Found</h4>`;
    }

    tasks.forEach((ele, idx) => {
        tBody.innerHTML += `
                            <tr class="d-flex justify-between">
                                <td>${idx + 101}</td>
                                <td style="text-decoration:${ele.status ? 'line-through black 5px;' : ''}">${ele.task}</td>
                                <td><input type="checkbox" id="taskCheckBox" onclick="taskStatus(${ele.id})" ${(ele.status) ? 'checked' : ''}></td>
                                <td>
                                    <button id="edit" onclick="editTask(${ele.id})">Edit</button>
                                    <button id="delete" onclick="deleteTask(${ele.id})">Delete</button>
                                </td>
                            </tr>
        `;

        // console.log(ele, idx)
    });
}

viewTask();

const deleteTask = (deleteId) => {
    // console.log("Delete ID : ", deleteId);

    tasks = tasks.filter(task => task.id !== deleteId);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    viewTask();
}

const editTask = (editId) => {
    // console.log("Edit ID : ", editId);

    localStorage.setItem("editId", JSON.stringify(editId));

    window.location.href = "/edit-task.html";
}

function taskStatus(statusId) {
    // console.log("Status ID : ", statusId);

    const statusUpdateTask = tasks.find(task => task.id === statusId);

    // console.log(statusUpdateTask);

    statusUpdateTask.status = !statusUpdateTask.status;

    tasks = tasks.filter(val => val.id !== statusId)

    tasks.push(statusUpdateTask);

    // console.log(statusUpdateTask.status);

    // console.log(statusUpdateTask);

    // console.log(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "/view-task.html";
}