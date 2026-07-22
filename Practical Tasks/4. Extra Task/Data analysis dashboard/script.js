const URL = "https://dummyjson.com/users";

const totalAdmin = document.getElementById("totalAdmin");
const totalModerator = document.getElementById("totalModerator");
const totalUser = document.getElementById("totalUser");

const displayGraph = document.getElementById("displayGraph");
const filterData = document.getElementById("filterData");
const chartType = document.getElementById("chartType");
const makeGraph = document.getElementById("makeGraph");

// mertics display variables 
const average = document.getElementById("average");
const minimum = document.getElementById("minimum");
const maximum = document.getElementById("maximum");
const sum = document.getElementById("sum");

// chart global variable 
let myChart = null;

async function getData() {

    const res = await fetch(URL);

    const data = await res.json();

    return data.users;
}

async function countRoles() {
    const data = await getData();

    // console.log(data);

    let admin = 0;
    let moderator = 0;
    let user = 0;

    data.forEach(val => {
        if (val.role === "admin")
            admin++;
        else if (val.role === "moderator")
            moderator++;
        else if (val.role === "user")
            user++;
    })

    totalAdmin.innerText = admin;
    totalModerator.innerText = moderator;
    totalUser.innerText = user;

    return [admin, moderator, user];
}

async function displayGraphFunc() {
    const data = await getData();

    const value = await countRoles();

    // this is used to remove duplicate roles values 
    let key = data.map(val => val.role);
    key = new Set(key);
    key = Array.from(key);

    myChart = new Chart("displayGraph", {
        type: "pie",
        data: {
            labels: key,
            datasets: [{
                data: value,
                backgroundColor: ["red", "green", "blue", "orange", "brown"]
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Data Analytic Graph'
            }
        }
    });
}

displayGraphFunc();

makeGraph.addEventListener('click', async e => {
    if (!filterData.value || !chartType.value) {
        alert("Please select filter type and chart type");
        return;
    }

    myChart.destroy();

    const data = await getData();

    let sortedData = data.map(ele => ele[filterData.value]);

    const count = sortedData.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});

    let allKey = [];
    let allValue = [];

    for (let [key, value] of Object.entries(count)) {
        allKey.push(key);
        allValue.push(value);
    }

    myChart = new Chart("displayGraph", {
        type: chartType.value,
        data: {
            labels: allKey,
            datasets: [{
                data: allValue,
                backgroundColor: ["red", "green", "blue", "orange", "brown"]
            }]
        },
        options: {}
    })
});

async function displayMatrics(event) {
    average.innerText = "Loading...";
    minimum.innerText = "Loading...";
    maximum.innerText = "Loading...";
    sum.innerText = "Loading...";

    let val = null;

    if (event)
        val = event.target.value;
    else
        val = 'age';

    const data = await getData();

    const filteredData = data.map(ele => ele[val]);

    let averageCount = 0;
    let minCount = filteredData[0];
    let maxCount = filteredData[0];
    let totalSum = 0;

    for (let i = 0; i < filteredData.length; i++) {
        if (minCount > filteredData[i]) {
            minCount = filteredData[i];
        }

        if (maxCount < filteredData[i]) {
            maxCount = filteredData[i];
        }

        totalSum += filteredData[i];
    }

    averageCount = totalSum / filteredData.length;

    average.innerText = averageCount.toFixed(2);
    minimum.innerText = minCount.toFixed(2);
    maximum.innerText = maxCount.toFixed(2);
    sum.innerText = totalSum.toFixed(2);
}

displayMatrics();