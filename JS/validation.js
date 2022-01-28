window.addEventListener('DOMContentLoaded', () => {

    //Name validation
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error')
    name.addEventListener('input', function () {
        if (name.value.lenght == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    //salary validation
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

    //Start Date Validation
    const date = document.querySelector('#start Date');
    const output1 = document.querySelector('text-error');
    date.addEventListener('input', function () {
        try {
            (new EmployeePayrollData()).date = date.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
});