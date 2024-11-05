/**
 * Regex to test for condition:
 * start position ^ end position $
 * for numbers = /^\d/ Matches any digit from [0-9];
 * uppercase = /^[A-Z]/ lowercase /[a-z]/
 **/

document.getElementById('getForm').addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});

function validateForm(){
    // alert('working');
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('invalid'));
    isValid = true;
    //fullName validation
    const fullName = document.getElementById('name');
    const name_err = document.querySelector('.name-err');

    if(fullName.value == ''){
        name_err.textContent = "Fullname field is required";
        fullName.classList.add('invalid');
        isValid = false;
    }
    if(/^\d/.test(fullName.value)){
        name_err.textContent = 'Fullname should not start with a number';
        fullName.classList.add('invalid');
        isValid = false;
    }

    //email validation
    const email = document.getElementById('email');
    const email_err = document.querySelector('.email-err');

    if(email.value == ''){
        email_err.textContent = 'Email field is required';
        email.classList.add('invalid');
        isValid = false
    }
    // if(!email.value.validity.valid){
    //     email_err.textContent = 'Please enter a valid email address';
    //     email.classList.add('invalid');
    //     isValid = false;
    // }

    //phone validation;
    const phone = document.getElementById('phone');
    const phone_err = document.querySelector('.phone-err');
    if(phone.value == ''){
        phone_err.textContent = 'Phone field is required';
        phone.classList.add('invalid');
        isValid = false;
    }else  if(!/\d/.test(phone.value)){
        phone_err.textContent = 'Phone must be a number';
        phone.classList.add('invalid');
        isValid = false;
    }else if(!/\d{11}$/.test(phone.value)){
        phone_err.textContent = 'Phone number must be 11 digits';
        phone.classList.add('invalid');
        isValid = false;
    }

    //password validation
    const password = document.getElementById('password');
    const password_err = document.querySelector('.password-err');
    //regex for different checks
    const uppercaseRegex = /^[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[!@#$%^&*(),.":{}|<>]/;
    if(password.value == ''){
        password_err.textContent = 'Password field is required';
        password.classList.add('invalid');
        isValid = false;
    }else if(!uppercaseRegex.test(password) ||!lowercaseRegex.test(password) || !digitRegex.test(password) || symbolRegex.test(password) || password.length > 8){
        password_err.textContent = 'Password must start with an uppercase letter,contain a lowercase letter, a number, a symbol and be no more than 8 characters';
        password.classList.add('invalid');
        isValid = false;
    }
    //confirm password validation
    const confirm_password = document.getElementById('confirm_password');
    const confirm_err = document.querySelector('.confirm-err');

    if(confirm_password.value == ''){
        confirm_err.textContent = 'Confirm Password field is required';
        confirm_password.classList.add('invalid');
        isValid = false;
    }else if(confirm_password !== password){
        confirm_err.textContent = 'Password must be the same';
        confirm_password.classList.add('invalid');
        isValid = false;
    }
    //If Form is valid you can submit the form here
   if(isValid){
    alert('form submitted successfully');
   }
    
}
