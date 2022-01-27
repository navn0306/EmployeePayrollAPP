window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validateSalary();
});

function validateName() {
    const name = document.querySelector('#name1');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(name.value)) {
            textError.textContent = "";
        }
        else {
            textError.textContent = "Name is invalid";
        }
    });
}
function validateSalary() {
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}