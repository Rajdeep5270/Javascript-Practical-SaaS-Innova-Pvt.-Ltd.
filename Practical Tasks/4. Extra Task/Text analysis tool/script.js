// display output variables 
const displayCountedWords = document.getElementById("displayCountedWords");
const displayAverageWordLength = document.getElementById("displayAverageWordLength");
const displayMostCommonWords = document.getElementById("displayMostCommonWords");

// to get data from input field 
const inputText = document.getElementById("inputText");
document.getElementById("submitBtn").addEventListener('click', e => {
    // console.log(inputText.value);

    if (!inputText.value || inputText.value === ' ') {
        alert('Write something in input box.');
        return;
    }

    const text = inputText.value.toLowerCase().replace(/[^\w\s]/g, "").trim().split(/\s+/);

    // console.log(text);

    countWords(text);

    averageWordLength(text);

    mostCommonWords(text)

    inputText.value = "";
});

const countWords = (text) => {
    // console.log("Text : ", text);
    let count = countFunc(text);

    displayCountedWords.innerText = `Words Count : ${count}`;
};

const averageWordLength = (text) => {
    // console.log("Before Lower Case : ", text);

    text = toLowerCaseFunc(text);

    let averageWordLengthCount = 0;

    let count = countFunc(text);

    text.forEach(txt => {
        if (txt.length > 1) {
            // console.log(`${txt} : `, txt.length);
            averageWordLengthCount += txt.length;
        }
    })

    // console.log("All Words Length : ", averageWordLengthCount);

    averageWordLengthCount = averageWordLengthCount / count;

    averageWordLengthCount = averageWordLengthCount.toFixed(2);

    // console.log("Average Word Length : ", averageWordLengthCount);

    // console.log("After Lower Case : ", text);

    displayAverageWordLength.innerText = `Average Word Length : ${averageWordLengthCount}`;
}

const mostCommonWords = (text) => {
    // console.log(text);
    // let isCommonWords;

    // for (let i = 0; i < text.length; i++) {
    //     let commonWords = 1;
    //     // console.log(text[i]);
    //     for (let j = i + 1; j < text.length; j++) {
    //         if (text[j] == '') continue;

    //         if (text[i].toLowerCase() === text[j].toLowerCase()) {
    //             commonWords++;
    //             text[j] = '';
    //         }

    //         // console.log(text[j]);
    //     }
    //     if (commonWords > 1 && text[i].length > 1) {
    //         isCommonWords = true;
    //         // console.log(`${text[i]} : ${commonWords}`);
    //         displayMostCommonWords.innerText += ` ${text[i]} : ${commonWords},`;
    //     }
    // }

    // if (!isCommonWords) {
    //     displayMostCommonWords.innerText = `There are no common words.`;
    // }

    const wordCounts = text.reduce((acc, curr) => {

        if (curr.length <= 1) return acc;

        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});

    let isCommonWords = false;
    displayMostCommonWords.innerText = '';

    // console.log(wordCounts);

    for (const [key, value] of Object.entries(wordCounts)) {
        if (value > 1) {
            isCommonWords = true;
            // console.log(key + ":" + value);
            displayMostCommonWords.innerText += ` ${key} : ${value},`;
        }
    }

    if (!isCommonWords) {
        displayMostCommonWords.innerText = `There are no common words.`;
    }
}

// these function are made to dry code 
const toLowerCaseFunc = (text) => {
    return text.map(txt => txt.toLowerCase());
}

const countFunc = (text) => {
    let count = 0;

    text.forEach(word => {
        if (word.length > 1) {
            count++;
        }
    })

    return count;
}