// comments are for debugging 

// global variables
let passwordStr = "";
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confPasswordError = document.getElementById("confPasswordError");
const submitBtn = document.getElementById("submitBtn");
const finalOutput = document.getElementById("finalOutput");

// validiation 
let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfPasswordValid = false;

submitBtn.setAttribute('disabled', 'true');

// name field 
document.getElementById("name").addEventListener('keyup', e => {
    // console.log(e.target.value);

    const str = e.target.value;

    // console.log(e);

    if (str.match(/[0-9]/g)) {
        nameError.innerHTML = `
            <p style="color:red;">Name should not contain numbers</p>
        `;

        isNameValid = false;
        return;
    } else if (/[^0-9a-zA-Z ]/.test(str)) {
        nameError.innerHTML = `
            <p style="color:red;">Name should not contain special characters numbers</p>
        `;

        isNameValid = false;
        return;
    } else if (str.length < 3) {
        nameError.innerHTML = `
            <p style="color:red;">Name should be more than 3 characters</p>
        `;

        isNameValid = false;
        return;
    } else {
        isNameValid = true;
        nameError.innerHTML = "";
    }

    checkValiadiation();
});

// email field 
document.getElementById("email").addEventListener('keyup', e => {
    const str = e.target.value;

    // console.log(str);

    if (!/^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(str)) {
        emailError.innerHTML = `
            <p style="color:red;">Email is not valid</p>
        `;

        isEmailValid = false;

        return;
    }

    isEmailValid = true;

    emailError.innerHTML = "";
    checkValiadiation();
});


// password field 
document.getElementById("password").addEventListener('keyup', e => {
    passwordStr = e.target.value;

    // const regexValidiation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (passwordStr.length < 8) {
        passwordError.innerHTML = `
             <p style="color:red;">Password should be 8 Characters long</p>
        `;

        isPasswordValid = false;

        return;
    }

    // const testing = /[0-9a-zA-Z]/.test(passwordStr);

    // console.log(testing);

    else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordStr)) {
        passwordError.innerHTML = `
                <p style="color:red;">Password should contain 1 uppercase, 1 lowercase, 1 digit, 1 special character</p>
            `;

        isPasswordValid = false;

        return;
    }

    isPasswordValid = true;

    passwordError.innerHTML = "";

    checkValiadiation();
});

// confirm password field 
document.getElementById("cPassword").addEventListener('keyup', e => {
    const str = e.target.value;

    // console.log("Password : ", passwordStr);

    // console.log(str);

    if (passwordStr !== str) {
        confPasswordError.innerHTML = `
            <p style="color:red;">Password & confirm password does not match</p> 
        `;

        isConfPasswordValid = false;

        return;
    }

    isConfPasswordValid = true;

    confPasswordError.innerHTML = "";

    checkValiadiation();
});

function checkValiadiation() {
    if (isNameValid && isEmailValid && isPasswordValid && isConfPasswordValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'true')
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    finalOutput.innerText = "Form Submitted Successfully...";

    setTimeout(() => {
        finalOutput.innerText = "";
        window.location.reload()
    }, 3000);

}