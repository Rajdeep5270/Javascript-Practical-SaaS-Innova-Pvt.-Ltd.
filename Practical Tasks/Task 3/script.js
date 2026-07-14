const URL = "https://jsonplaceholder.typicode.com/users";

const tBody = document.getElementById("tBody");

const search = document.getElementById("search");

async function getData() {
    const res = await fetch(URL);

    let data = await res.json();

    search.addEventListener('keyup', e => {
        let liveSearch = e.target.value.toLowerCase();

        let filteredData = data.filter((value) => value.name.toLowerCase().includes(liveSearch));

        renderTable(filteredData);
    });

    tBody.innerHTML = "";

    renderTable(data);
}

getData();

function renderTable(data) {
    tBody.innerHTML = "";

    if (data.length <= 0) {
        tBody.innerHTML = `<p style="text-align: center;">No Data Found</p>`;
    }

    data.forEach((data, idx) => {
        tBody.innerHTML += `
        <tr>
                                <td>${idx + 1}</td>
                                <td>${data.name}</td>
                                <td>${data.email}</td>
                                <td>${data.phone}</td>
                                <td>${data.address.street}</td>
                                <td>${data.address.city}</td>
                                <td>${data.address.zipcode}</td>
                                </tr>
         `;
    })
}   