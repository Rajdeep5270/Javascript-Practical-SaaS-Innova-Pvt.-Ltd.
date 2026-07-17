// comments are for debugging 

let taskLists = [];

// global variables used in 1 or more function 
const tBody = document.getElementById("tBody");
const tDescription = document.getElementById("tDescription");
const tStatus = document.getElementById("tStatus");

const addTaskBtn = document.getElementById("addTaskBtn");
const updateTaskBtn = document.getElementById("updateTaskBtn");

const onFormSubmit = (e, id, status) => {
    e.preventDefault();

    if (!id) {
        taskLists.push({
            id: Math.floor(Math.random() * 1000),
            description: tDescription.value,
            status: "Pending"
        });
    } else {
        taskLists.push({
            id,
            description: tDescription.value,
            status
        });
    }

    tDescription.value = "";

    viewTaskLists(taskLists);
};

const viewTaskLists = (data) => {

    tBody.innerHTML = "";

    if (data.length < 1) {
        tBody.innerHTML = "No Data Found";
    }

    data.map((task, idx) => {
        tBody.innerHTML += ` <tr>
                                    <td>${idx + 1}</td>
                                    <td>${task.description}</td>
                                    <td>
                                        <button onclick="updateTaskStatus(${task.id})" style="background-color:${(task.status === "Completed") ? "green" : "red"}">${task.status}</button>
                                    </td>
                                    <td>
                                        <button onclick="editTask(${task.id})">Edit</button>
                                        <button onclick="deleteTask(${task.id})">Delete</button>
                                    </td>
                                </tr>`;
    });
};

const deleteTask = (id) => {
    taskLists = taskLists.filter(task => task.id !== id);

    viewTaskLists(taskLists);
};

const editTask = (editId) => {
    const task = findTask(editId);

    taskLists = taskLists.filter((task) => task.id !== editId);

    tDescription.value = task.description;

    addTaskBtn.style.display = "none";

    updateTaskBtn.style.display = "block";

    updateTaskBtn.addEventListener('click', e => {
        if (tDescription.value === "") {
            alert("Please fill all details");
            return;
        }

        onFormSubmit(event, editId, task.status);

        updateTaskBtn.style.display = "none";

        addTaskBtn.style.display = "block";

        viewTaskLists(taskLists);
    });
};

const updateTaskStatus = (updateStatusId) => {
    const task = findTask(updateStatusId);

    if (task.status === "Completed") {
        task.status = "Pending"
    } else {
        task.status = "Completed"
    }

    viewTaskLists(taskLists);
};

const filterData = (filter) => {
    const filteredTasks = taskLists.filter(task => task.status.toLowerCase().includes(filter.toLowerCase()));

    viewTaskLists(filteredTasks);
};

// find task function 
const findTask = (findId) => {
    return taskLists.find(task => task.id === findId);
};