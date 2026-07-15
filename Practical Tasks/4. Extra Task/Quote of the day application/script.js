const URL = "https://dummyjson.com/quotes";

const fetchData = async () => {
    const response = await fetch(URL);

    const data = await response.json();

    console.log(data);
}

fetchData();