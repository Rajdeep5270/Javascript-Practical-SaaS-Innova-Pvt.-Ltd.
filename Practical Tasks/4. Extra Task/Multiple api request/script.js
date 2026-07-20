const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://dummyjson.com/users";

const displayOutput = document.getElementById("displayOutput");

let allData = [];

const fetchData = async () => {
    try {
        const res = await Promise.all([
            fetch(api1),
            fetch(api2),
        ]);

        const data = await Promise.all(
            res.map(res => res.json())
        );

        // console.log("Data only : ", data[0]);
        // console.log("Api 2 data : ", data[1].users);

        // data[0].push(data[1].users);

        allData = [...data[0], ...data[1].users];

        // console.log("All Data : ", allData);

        renderTable();
    } catch (err) {
        console.log("Error : ", err);
    }
}

fetchData();

// console.log("All Data : ", allData);

function renderTable() {
    // console.log("All Data : ", allData);
    displayOutput.innerHTML = "";

    allData.forEach((val, idx) => {
        displayOutput.innerHTML += `
                            <tr>
                                <td>${idx + 1}</td>
                                <td>${val.name || `${val.firstName} ${val.maidenName} ${val.lastName}`}</td>
                                <td>${val.email}</td>
                                <td>${val.gender || "-"}</td>
                                <td>${val.phone}</td>
                                <td>${val.website || val.username || '-'}</td>
                                <td>${val.role || "-"}</td>
                            </tr>
        `;
    })
}