const inputSec = document.getElementById("inputSec");
const displayOutput = document.getElementById("displayOutput");
const startBtn = document.getElementById("startBtn");

let intervalId = null;

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
    // if btn is clicked two times the previous interval will stop and new one will start
    clearInterval(intervalId);

    let time = Number(inputSec.value);

    if (isNaN(time) || time < 0) {
        alert("Please enter a valid number.");
        return;
    }

    displayOutput.innerText = time;

    intervalId = setInterval(() => {
        time--;
        displayOutput.innerText = time;

        if (time === 0) {
            alert("count down over")
            clearInterval(intervalId);
        }
    }, 1000);
}