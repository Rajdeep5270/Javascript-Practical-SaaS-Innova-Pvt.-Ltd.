const questionsObj = [
    {
        id: 101,
        question: "Which is the largest planet in our Solar System",
        answer: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct_answer: "Saturn"
    },
    {
        id: 102,
        question: "Which is the longest river in the world",
        answer: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correct_answer: "Mississippi River"
    },
    {
        id: 103,
        question: "Who was the first person to step on the Moon in 1969",
        answer: ["Yuri Gagarin", "Buzz Aldrin", "Michael Collins", "Neil Armstrong"],
        correct_answer: "Neil Armstrong"
    },
    {
        id: 104,
        question: "What is the standard number of players on the field for a football (soccer) team",
        answer: ["9", "11", "15", "7"],
        correct_answer: "15"
    },
    {
        id: 105,
        question: "Who painted the Mona Lisa",
        answer: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct_answer: "Leonardo da Vinci"
    }
];

let currentIndex = 0;
let right = 0;
let wrong = 0;

const questionDisplay = document.getElementById("questionDisplay");
const optionDisplay = document.getElementById("optionDisplay");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");
const buttonDisplay = document.getElementById("buttonDisplay");
const heading = document.getElementById("heading");
const currentScore = document.getElementById("currentScore");
const liveQuestions = document.getElementById("liveQuestions");

function loadQuestion() {
    const currentQuestion = questionsObj[currentIndex];
    const currentOption = questionsObj[currentIndex].answer;

    questionDisplay.innerHTML = "";
    optionDisplay.innerHTML = "";

    questionDisplay.innerHTML = `
        <h2>${currentIndex + 1}</h2>
        <h2>${currentQuestion.question}</h2>
    `;

    currentOption.forEach((opt, idx) => {
        optionDisplay.innerHTML += `
            <input type="radio" id="option${idx + 1}" name="option" onclick="scoreCount()" value="${opt}">
            <label for="option${idx + 1}" style="margin:0 10px 0 0;">${opt}</label>
        `;
    });
}

loadQuestion();

function nextQuestion() {
    const selectedOption = document.querySelector("input[name='option']:checked");

    if (!selectedOption) {
        alert("Please select answer to continue");
    } else {
        currentIndex++;

        liveQuestions.innerHTML = ""
        displayButtons();
    }

    if (currentIndex < questionsObj.length) {
        result.innerText = "";
        loadQuestion();
    }

    // console.log(currentIndex);

    if (currentIndex >= questionsObj.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = 'flex';
    };
}

function scoreCount() {
    const selectedOption = document.querySelector("input[name='option']:checked");

    const allOptions = document.querySelectorAll("input[name='option']");

    allOptions.forEach(opt => {
        opt.setAttribute('disabled', '');
    });

    if (selectedOption.value === questionsObj[currentIndex].correct_answer) {

        right++;

        result.innerText = "";

        result.innerText = "Answer is correct";

        currentScore.innerHTML = `
        <p>Right : ${right} Wrong : ${wrong}</p>
    `

        return;
    } else {
        wrong++;

        result.innerText = "";

        result.innerText = "Answer is in-correct";

        currentScore.innerHTML = `
        <p>Right : ${right} Wrong : ${wrong}</p>
    `

        return;
    }
}

function displayResultFunc() {
    alert("Contratulations you have completed test");

    wrong = (questionsObj.length) - right;

    heading.innerText = "Result";

    buttonDisplay.style.display, optionDisplay.style.display, liveQuestions.style.display = "none";

    currentScore.innerHTML = "";

    if (wrong > right) {
        questionDisplay.innerHTML = `
        <h2>Right Attempt : ${right}</h2>
        <h2>Wrong Attempt : ${wrong}</h2>
        <br>
        <h2>Better Luck Try Next Time!</h2>
    `
    } else if (right === questionsObj.length) {
        questionDisplay.innerHTML = `
        <h2>Right Attempt : ${right}</h2>
        <h2>Wrong Attempt : ${wrong}</h2>
        <br>
        <h2>You Are Master!</h2>
        `
    } else {
        questionDisplay.innerHTML = `
            <h2>Right Attempt: ${right}</h2 >
        <h2>Wrong Attempt : ${wrong}</h2>
        <br>
        <h2>You Are Pass!</h2>
    `
    }
}

displayButtons();

function displayButtons() {
    questionsObj.forEach((_, idx) => {
        liveQuestions.innerHTML += `
        <button id="${idx}" style="background-color:${(idx === currentIndex) ? '#F97316;' : ''} color:${(idx === currentIndex) ? '#000000' : ''}">${idx + 1}</button>
    `
    });
}
