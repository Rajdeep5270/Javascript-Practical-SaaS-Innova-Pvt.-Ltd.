// comment are for debugging 

const wordAnalyzer = document.getElementById("wordAnalyzer");

// let count = 1;

wordAnalyzer.addEventListener('keyup', e => {
    let search = e.target.value;

    countCharacters(search)

    countWords(search);
});

function countCharacters(value) {
    const printLength = document.getElementById("totalLengthValue");

    // if (value !== " ") {
    //     count++;
    // }

    for (let i = 0; i < printLength.length; i++) {
        console.log(printLength[i]);
    }

    printLength.innerText = "";

    printLength.innerText = value.length;
}

function countWords(value) {
    const printCount = document.getElementById("totalLengthWord");

    value = value.split(" ");

    printCount.innerText = value.length;
}

function wordFrequency() {
    const value = wordAnalyzer.value;

    const wordFrequency = document.getElementById("wordFrequency");

    const splittedText = value.split(" ");

    // console.log(splittedText);

    wordFrequency.innerText = "";

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

        wordFrequency.innerText += `${splittedText[i]} = ${frq} \n`;
    }
}