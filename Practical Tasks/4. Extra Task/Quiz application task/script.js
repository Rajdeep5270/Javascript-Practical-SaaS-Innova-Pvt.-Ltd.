// this is question answe and correct answer array of obj 
const questionsObj = [
    {
        id: 101,
        question: "Which is the largest planet in our Solar System",
        answer: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct_answer: "Jupiter"
    },
    {
        id: 102,
        question: "Which is the longest river in the world",
        answer: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correct_answer: "Nile River"
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
        correct_answer: "11"
    },
    {
        id: 105,
        question: "Who painted the Mona Lisa",
        answer: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct_answer: "Leonardo da Vinci"
    },
    {
        id: 106,
        question: "Which element has the chemical symbol 'O'",
        answer: ["Gold", "Oxygen", "Osmium", "Zinc"],
        correct_answer: "Oxygen"
    },
    {
        id: 107,
        question: "What is the capital city of France",
        answer: ["London", "Berlin", "Rome", "Paris"],
        correct_answer: "Paris"
    },
    {
        id: 108,
        question: "Which is the smallest continent by land area",
        answer: ["Europe", "Australia", "Antarctica", "South America"],
        correct_answer: "Australia"
    },
    {
        id: 109,
        question: "What is the hardest natural substance on Earth",
        answer: ["Gold", "Iron", "Diamond", "Quartz"],
        correct_answer: "Diamond"
    },
    {
        id: 110,
        question: "Which gas do plants absorb from the atmosphere for photosynthesis",
        answer: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"],
        correct_answer: "Carbon Dioxide"
    },
    {
        id: 111,
        question: "How many bones are there in an adult human body",
        answer: ["106", "206", "306", "406"],
        correct_answer: "206"
    },
    {
        id: 112,
        question: "Which ocean is the largest on Earth",
        answer: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct_answer: "Pacific Ocean"
    },
    {
        id: 113,
        question: "Who wrote the play 'Romeo and Juliet'",
        answer: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct_answer: "William Shakespeare"
    },
    {
        id: 114,
        question: "What is the currency used in Japan",
        answer: ["Yuan", "Won", "Yen", "Dollar"],
        correct_answer: "Yen"
    },
    {
        id: 115,
        question: "Which planet is known as the Red Planet",
        answer: ["Venus", "Mars", "Mercury", "Neptune"],
        correct_answer: "Mars"
    },
    {
        id: 116,
        question: "What is the primary language spoken in Brazil",
        answer: ["Spanish", "English", "French", "Portuguese"],
        correct_answer: "Portuguese"
    },
    {
        id: 117,
        question: "Which organ in the human body is responsible for pumping blood",
        answer: ["Brain", "Lungs", "Heart", "Liver"],
        correct_answer: "Heart"
    },
    {
        id: 118,
        question: "What is the boiling point of water at sea level in Celsius",
        answer: ["50°C", "90°C", "100°C", "120°C"],
        correct_answer: "100°C"
    },
    {
        id: 119,
        question: "Which country is home to the Kangaroo",
        answer: ["South Africa", "Australia", "New Zealand", "Kenya"],
        correct_answer: "Australia"
    },
    {
        id: 120,
        question: "Who invented the telephone",
        answer: ["Thomas Edison", "Albert Einstein", "Alexander Graham Bell", "Nikola Tesla"],
        correct_answer: "Alexander Graham Bell"
    },
    {
        id: 121,
        question: "Which is the tallest animal on Earth",
        answer: ["Elephant", "Giraffe", "Ostrich", "Blue Whale"],
        correct_answer: "Giraffe"
    },
    {
        id: 122,
        question: "What pigment gives leaves their green color",
        answer: ["Carotene", "Hemoglobin", "Chlorophyll", "Melanin"],
        correct_answer: "Chlorophyll"
    },
    {
        id: 123,
        question: "Which country gifted the Statue of Liberty to the United States",
        answer: ["United Kingdom", "France", "Germany", "Italy"],
        correct_answer: "France"
    },
    {
        id: 124,
        question: "What is the closest star to planet Earth",
        answer: ["Proxima Centauri", "Sirius", "The Sun", "Betelgeuse"],
        correct_answer: "The Sun"
    },
    {
        id: 125,
        question: "Which dynamic device measures atmospheric pressure",
        answer: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
        correct_answer: "Barometer"
    },
    {
        id: 126,
        question: "How many colors are there in a standard rainbow",
        answer: ["5", "6", "7", "8"],
        correct_answer: "7"
    },
    {
        id: 127,
        question: "Which city is known as the Big Apple",
        answer: ["Los Angeles", "Chicago", "London", "New York City"],
        correct_answer: "New York City"
    },
    {
        id: 128,
        question: "What is the main component of a computer's central processing unit (CPU)",
        answer: ["Silicon", "Copper", "Aluminum", "Silver"],
        correct_answer: "Silicon"
    },
    {
        id: 129,
        question: "Which is the deepest ocean trench on Earth",
        answer: ["Java Trench", "Puerto Rico Trench", "Mariana Trench", "Sunda Trench"],
        correct_answer: "Mariana Trench"
    },
    {
        id: 130,
        question: "Who was the first President of the United States",
        answer: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        correct_answer: "George Washington"
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

// to load question first time automatically calls and then when click on next button 
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

// when the answer is checked then it will work after clicking on next button 
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

// this is live rendering like state in react when you click on options in quiz it will call and check the answer and give live result 
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

// when you have completed your task then a submit button appears when you click on it the exam will submit and you can see your score 
function displayResultFunc() {
    alert("Contratulations you have completed test");

    wrong = questionsObj.length - right;

    heading.innerText = "Result";

    buttonDisplay.style.display, liveQuestions.style.display = "none";

    optionDisplay.style.display = "none";

    submitBtn.style.display = "none";

    currentScore.innerHTML = "";

    if (wrong > right) {
        questionDisplay.innerHTML = `
        <h2>Score : ${right}/${questionsObj.length}</h2>
        <br>
        <h2>Better Luck Try Next Time!</h2>
    `
    } else if (right === questionsObj.length) {
        questionDisplay.innerHTML = `
        <h2>Score : ${right}/${questionsObj.length}</h2>
        <br>
        <h2>You Are Master!</h2>
        `
    } else {
        questionDisplay.innerHTML = `
            <h2>Score : ${right}/${questionsObj.length}</h2>
        <br>
        <h2>You Are Pass!</h2>
    `
    }
}

displayButtons();

// display button live at the bottom that shows you at which question you are 
function displayButtons() {
    questionsObj.forEach((_, idx) => {
        liveQuestions.innerHTML += `
        <button id="${idx}" style="background-color:${(idx === currentIndex) ? '#F97316;' : ''} color:${(idx === currentIndex) ? '#000000;' : ''} margin:10px 0;">${idx + 1}</button>
    `
    });
}