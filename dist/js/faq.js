import validator from "./formValidation.js";

let buttons = document.querySelectorAll('.faq__name');

buttons.forEach(item => {
    item.addEventListener('click', () => {
        if (item.parentNode.classList.contains('active')) {
            item.parentNode.classList.remove('active')
        } else {
            item.parentNode.classList.add('active')
        }

    });
})




let inputs4 = document.querySelectorAll('.inputs-validation-js');
let form4 = document.querySelector('.faq__form');

validator(form4, inputs4)



/** validate mail */

const emailInput = document.getElementById('mail');

emailInput.addEventListener('change', updateValidationMessage);

function validateEmail(email) {
    // Простая валидация адреса электронной почты с использованием регулярного выражения
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function updateValidationMessage(event) {
    const emailInput = event.target;

    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove('error');
    } else {
        emailInput.classList.add('error');
    }
}

