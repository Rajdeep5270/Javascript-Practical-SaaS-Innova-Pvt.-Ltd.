// comment are for debugging 

const wordAnalyzer = document.getElementById("wordAnalyzer");

const totalLengthCharacters = document.getElementById("totalLengthCharacters");
const totalLengthWord = document.getElementById("totalLengthWord");
const displayWordFrequency = document.getElementById("displayWordFrequency");

document.getElementById("analyzeBtn").addEventListener('click', e => {
    const val = wordAnalyzer.value;

    countCharacters(val);

    countWords(val);

    wordFrequency(val);
});

let count = 0;

const countCharacters = (val) => {
    count = 0;

    for (let i = 0; i < val.length; i++) {
        if (val[i] !== " ") {
            count++;
        }
    }

    totalLengthCharacters.innerText = count;
}

function countWords(val) {
    count = 0;
    val = val.split(" ");

    val.forEach(ele => {
        // console.log("Element : ", ele);

        if (ele !== '') {
            count++;
        }
    })

    totalLengthWord.innerText = count;
}

function wordFrequency(val) {
    val = val.toLowerCase();

    const splittedText = val.split(" ");

    // console.log(splittedText);

    displayWordFrequency.innerText = "";

    for (let i = 0; i < splittedText.length; i++) {

        if (splittedText[i] === null) continue;

        let frq = 1;
        for (let j = i + 1; j < splittedText.length; j++) {
            if (splittedText[i] === splittedText[j]) {
                splittedText[j] = null;
                frq++;
            }
        }

        // console.log(`${splittedText[i]} = ${frq}`);

        displayWordFrequency.innerText += `${splittedText[i]} = ${frq} \n`;
    }
}