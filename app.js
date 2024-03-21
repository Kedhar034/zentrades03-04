const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let usernameValid = false;
    let passwordValid = false;
    const usernameRegex = /^[a-zA-Z0-9_.@]+$/;
    if (usernameRegex.test(usernameInput.value)) {
        usernameValid = true;
        usernameError.textContent = ''; // Clear any previous error message
    } else {
        usernameValid = false;
        usernameError.textContent = 'Username must only contain letters, numbers, and underscores';
    }

    // Password Validation - Must contain at least one upperase letter, one number, and no special characters other than "@"
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*@)[a-zA-Z\d@]+$/;
    if (passwordRegex.test(passwordInput.value)) {
        passwordValid = true;
        passwordError.textContent = ''; // Clear any previous error message
    } else {
        passwordValid = false;
        passwordError.textContent = 'Password must contain at least one uppercase letter, one number,and the "@" symbol.';
    }

    if (usernameValid && passwordValid) {
        console.log('HI ${usernameInput.value}');


        if (passwordInput.value === "SmartServTest@123"){
            window.location.href = "dashboard.html";
        } else{
            passwordError.textContent='Entered a Invalid Password';
        }
    } 
});