const URL = "https://dummyjson.com/quotes";

const displayQuotes = document.getElementById("displayQuotes");

const fetchData = async () => {
    try {
        let loader = true;

        if (loader) {
            displayQuotes.innerHTML = `
            <p>Loading...</p> 
        `;
        }

        const response = await fetch(URL);

        const data = await response.json();

        const randomQuote = Math.floor(Math.random() * 30);

        loader = false;

        // console.log(data);

        if (!loader) {
            displayQuotes.innerHTML = `
             <p>${data.quotes[randomQuote].quote}</p>
            <h2>~${data.quotes[randomQuote].author}</h2>
         `;
        }
    } catch (err) {
        console.log("Display Quotes Error : ", err);
    }
}

fetchData();