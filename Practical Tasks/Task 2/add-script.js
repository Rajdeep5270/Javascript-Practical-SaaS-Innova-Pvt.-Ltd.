const tasks = JSON.parse(localStorage.getItem('tasks') || "[]");

function addTask() {
    const taskInput = document.getElementById("taskInput");

    // console.log(taskInput.value);

    tasks.push({
        id: Math.floor(Math.random() * 1000),
        task: taskInput.value
    })

    console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.innerText = "";

    window.location.href = "/view-task.html";
}

