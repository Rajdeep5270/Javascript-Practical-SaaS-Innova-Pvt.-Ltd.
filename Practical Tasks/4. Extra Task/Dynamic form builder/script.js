
const dynamicForm = document.getElementById("dynamicForm");
const submitBtn = document.getElementById("submitBtn");

function formCreation() {
    // alert("This dynamic form includes heading, input, buttons, etc...");
    let labelName = prompt("Enter Label Name");
    let formInputType = prompt("Enter input type\nHeading\nText\nEmail\nPassword\nNumber\nRadio\nButton");

    // console.log(labelName);
    // console.log(formInputType);

    if (!formInputType || !labelName) {
        alert("Fill all fields");
        return;
    }

    if (formInputType.toLowerCase() === "button") {
        const button = document.createElement("button");
        button.innerText = labelName;

        submitBtn.appendChild(button);
    } else if (formInputType.toLowerCase() === "heading") {
        document.getElementById("formTitleDisplay").innerText = labelName;
    } else if (formInputType === "radio") {
        const label = document.createElement("label");
        label.innerText = labelName;
        const input = document.createElement("input");
        input.setAttribute('type', `${formInputType}`);
        input.setAttribute('value', `${labelName} `)

        dynamicForm.appendChild(label);
        dynamicForm.appendChild(input);
    } else {
        const label = document.createElement("label");
        label.innerText = labelName;
        const input = document.createElement("input");
        input.setAttribute('type', `${formInputType} `);
        input.setAttribute('placeholder', `Enter ${labelName} here`)

        dynamicForm.appendChild(label);
        dynamicForm.appendChild(input);
    }
}
