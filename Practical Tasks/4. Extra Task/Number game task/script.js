let inputNumber = document.getElementById("inputNumber");
const result = document.getElementById("result");
const displayAttempts = document.getElementById("displayAttempts");
const checkGuessBtn = document.getElementById("checkGuessBtn");
const retry = document.getElementById("retry");

retry.style.display = "none";

let magicNumber;
let attempt = 0;

const checkNumber = () => {
    // console.log(inputNumber);
    // console.log(magicNumber);


    if (Number(inputNumber.value) > 100 || Number(inputNumber.value) < 0 || !Number(inputNumber.value)) {
        alert("Please enter valid guess");
        inputNumber.value = "";
        return;
    }

    attempt++;

    displayAttempts.innerText = `Attempts : ${attempt}`;

    if (magicNumber === Number(inputNumber.value)) {
        result.innerText = `You Won in ${attempt} Attempts`;
        checkGuessBtn.style.display = "none";
        retry.style.display = "flex";
    } else if (Number(inputNumber.value) > magicNumber) {
        result.innerText = "Very High";
    } else if (Number(inputNumber.value) < magicNumber) {
        result.innerText = "Very Low";
    }
};

const generateMagicNumber = () => {
    magicNumber = Math.floor(Math.random() * 100);

    // console.log(magicNumber);

    displayAttempts.innerText = `Attempts : ${attempt}`;
};

generateMagicNumber();

retry.addEventListener('click', e => {
    attempt = 0;

    inputNumber.value = "";

    result.innerText = "";

    retry.style.display = "none";

    checkGuessBtn.style.display = "block";

    generateMagicNumber();
});