const formInputType = document.getElementById("formInputType");
const dynamicForm = document.getElementById("dynamicForm");

document.getElementById("inputAddField").addEventListener('click', e => {
    // alert("Hello World");
    // console.log("Form Input Type Value : ", formInputType.value);

    dynamicForm.innerHTML += `
        <input type="${formInputType.value}"  placeholder="${formInputType.value}">
    `;
}); 