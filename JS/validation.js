window.addEventListener('DOMContentLoaded', (event) => {
    validateSalary();
});

//UseCase 8
function validateSalary() {
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}