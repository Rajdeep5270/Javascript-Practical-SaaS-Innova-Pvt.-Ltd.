const wordAnalyzer = document.getElementById("wordAnalyzer");

wordAnalyzer.addEventListener('keyup', e => {
    let search = e.target.value;

    countCharacters(search)

    countWords(search);
});

function countCharacters(value) {
    const printLength = document.getElementById("totalLengthValue");

    printLength.innerText = "";

    const totalLength = value.length;

    printLength.innerText = totalLength;
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