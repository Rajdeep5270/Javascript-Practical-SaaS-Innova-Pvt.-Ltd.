const URL = "https://dummyjson.com/users";

const totalAdmin = document.getElementById("totalAdmin");
const totalModerator = document.getElementById("totalModerator");
const totalUser = document.getElementById("totalUser");

const displayGraph = document.getElementById("displayGraph");
const filterData = document.getElementById("filterData");
const chartType = document.getElementById("chartType");
const makeGraph = document.getElementById("makeGraph");

let myChart = null;

async function getData() {
    const res = await fetch(URL);

    const data = await res.json();

    // console.log(data.users[0].role);

    return data.users;
}

async function countRoles() {
    // console.log(data);

    const data = await getData();

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

    // console.log("Admin : ", admin);
    // console.log("Moderator : ", moderator);
    // console.log("User : ", user);

    totalAdmin.innerText = admin;
    totalModerator.innerText = moderator;
    totalUser.innerText = user;

    return [admin, moderator, user];
}

countRoles();

async function displayGraphFunc() {
    const data = await getData();

    const value = await countRoles();

    let key = data.map(val => val.role);

    key = new Set(key);

    key = Array.from(key);

    // console.log(roles);

    myChart = new Chart("displayGraph", {
        type: "pie",
        data: {
            labels: key,
            datasets: [{
                data: value,
            }]
        },
        option: {}
    });
}

displayGraphFunc();

// filterData.addEventListener('click', async e => {
//     let val = e.target.value;

//     if (!val) return;



//     console.log(count);

//     // sortedData = new Set(sortedData);

//     // sortedData = Array.from(sortedData);

//     // data.map(ele => {
//     //     console.log(sortedData);
//     //     console.log(ele[val]);
//     // });

//     // displayGraph.destroy();



//     // displayGraphFunc(key, value, "bar");

//     // console.log("Key : ", allKey);
//     // console.log("Value : ", allValue);


// });

// chartType.addEventListener('click', e => {
//     const val = e.target.value;

//     if (!val) return;

//     myChart.destroy();

//     myChart = new Chart("displayGraph", {
//         type: bar,
//         data: {
//             labels: allKey,
//             datasets: [{
//                 data: allValue
//             }]
//         },
//         option: {}
//     })

//     e.target.value = "";
// })

makeGraph.addEventListener('click', async e => {
    if (!filterData.value || !chartType.value) {
        alert("Please select filter type and chart type");
        return;
    }

    myChart.destroy();

    const data = await getData();

    // console.log(val);

    let sortedData = data.map(ele => ele[filterData.value]);

    // console.log(sortedData);

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

    myChart.destroy();

    myChart = new Chart("displayGraph", {
        type: chartType.value,
        data: {
            labels: allKey,
            datasets: [{
                data: allValue
            }]
        },
        option: {}
    })
})