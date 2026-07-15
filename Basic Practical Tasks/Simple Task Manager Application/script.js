// comments are for debugging 

let taskLists = [];

// global variables used in 1 or more function 
const tBody = document.getElementById("tBody");
const tDescription = document.getElementById("tDescription");
const tStatus = document.getElementById("tStatus");


const onFormSubmit = (e) => {
    e.preventDefault();

    // console.log(`Task Description = ${tDescription.value}`);
    // console.log(`Task Status = ${tStatus.value}`);

    // if (updatedTaskId) {
    //     taskLists.push({
    //         id: updatedTaskId,
    //         description: tDescription.value,
    //         status: tStatus.value
    //     });
    // } else {
    taskLists.push({
        id: Math.floor(Math.random() * 1000),
        description: tDescription.value,
        status: "Pending"
    });
    // }

    // console.log(taskLists)

    tDescription.value = "";

    viewTaskLists(taskLists);
};

const viewTaskLists = (data) => {

    tBody.innerHTML = "";

    // console.log(taskLists);

    data.map((task, idx) => {
        tBody.innerHTML += ` <tr>
                                    <td>${idx + 1}</td>
                                    <td>${task.description}</td>
                                    <td>
                                        <button onclick="updateTask(${task.id})" style="background-color:${(task.status === "Completed") ? "green" : "red"}">${task.status}</button>
                                    </td>
                                    <td>
                                        <button onclick="editTask(${task.id})">Edit</button>
                                        <button onclick="deleteTask(${task.id})">Delete</button>
                                    </td>
                                </tr>`;
    });
};

const deleteTask = (id) => {
    // console.log("Task ID : ", id);

    tBody.innerHTML = "";

    taskLists = taskLists.filter(task => task.id !== id);

    viewTaskLists(taskLists);
};

const editTask = (editId) => {
    const editTask = taskLists.find(task => task.id === editId);

    // console.log("Edit Task ID : ", editId);              

    taskLists = taskLists.filter((task) => task.id !== editId);

    tDescription.value = editTask.description;

    editTask.id = editId;
    editTask.description = tDescription.value;

    // console.log("After Update ID : ", editTask.id);    

    // console.log(tDescription.value);

    viewTaskLists(taskLists);

    // onFormSubmit(event, editId);
};

const updateTask = (updateId) => {
    // console.log("Update ID : ", updateId);

    const task = taskLists.find((task) => task.id === updateId);

    // console.log("Task Status : ", task.status);

    if (task.status === "Completed") {
        task.status = "Pending"
    } else {
        task.status = "Completed"
    }

    // for debug 
    // console.log("Task Status", task.status)

    viewTaskLists(taskLists);
}

const filterData = (filter) => {
    // console.log("Filter : ", filter);

    const filteredTasks = taskLists.filter(task => task.status.toLowerCase().includes(filter.toLowerCase()));

    tBody.innerHTML = "";

    // filteredTasks.map((task, idx) => {
    //     tBody.innerHTML += ` <tr>
    //                                 <td>${idx + 1}</td>
    //                                 <td>${task.description}</td>
    //                                 <td>
    //                                     <button onclick="updateTask(${task.id})" style="background-color:${(task.status === "Completed") ? "green" : "red"}">${task.status}</button>
    //                                 </td>
    //                                 <td>
    //                                     <button onclick="editTask(${task.id})">Edit</button>
    //                                     <button onclick="deleteTask(${task.id})">Delete</button>
    //                                 </td>
    //                             </tr>`;
    // });

    viewTaskLists(filteredTasks);
}
