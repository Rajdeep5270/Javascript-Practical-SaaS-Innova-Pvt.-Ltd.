const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// console.log(num1.value);
// console.log(num2.value);

const displayResult = document.getElementById("displayResult");

let ans = null;

document.getElementById("addition").addEventListener('click', e => {
    // console.log("Number 1 : ", typeof +num1.value);
    // console.log("Number 2 : ", typeof +num2.value);

    if (validation()) return;

    ans = (+num1.value + +num2.value);

    // console.log(ans);

    displayResult.innerText = ans;

    clearInputFields();
});

document.getElementById("subtraction").addEventListener('click', e => {
    if (validation()) return;

    ans = (+num1.value - +num2.value);

    displayResult.innerText = ans;

    clearInputFields();
});

document.getElementById("multiplication").addEventListener('click', e => {
    if (validation()) return;

    ans = (+num1.value * +num2.value);

    displayResult.innerText = ans;

    clearInputFields();
});

document.getElementById("division").addEventListener('click', e => {
    if (validation()) return;

    if (+num2.value === 0) {
        alert("A number cannot be divisible by 0");
        return;
    }

    ans = (+num1.value / +num2.value);

    displayResult.innerText = ans;

    clearInputFields();
});

function clearInputFields() {
    num1.value = "";
    num2.value = "";
}

function validation() {
    if (!num1.value || !num2.value) {
        alert("Invalid Input");
        return true;
    }

    return false;
}