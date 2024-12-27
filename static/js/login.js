import { Menu } from './modules/menu.js';
import { Snowflake } from "./modules/snow.js";

Menu();
Snowflake();


const username = document.querySelector(".username");
const password = document.querySelector(".password");
const togglePassword = document.querySelector(".eye");
const loginForm = document.querySelector(".form-login");
const rememberMe = document.querySelector("#remember");
const loginStatus = document.getElementById("loginStatus");

const userStore = {
    username: "TEST123",
    password: "123123"
};

// toggle password

togglePassword.addEventListener("click", () => {
    if(password.type === "password") {
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
        password.type = "text";

        console.log("The password was shown.");
    }
    else {
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
        password.type = "password";

        console.log("The password was hidded.");
    }
});

// username input to uppercase

username.addEventListener("input", () => {
    username.value = username.value.toUpperCase();
});

// Form validation

loginForm.onsubmit = (e) => {
    e.preventDefault();
    validateInputs();
}

const validateInputs = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let userErrorMsg = document.getElementById("userErrorMsg");
    let passErrorMsg = document.getElementById("passErrorMsg");
    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;

    // function to add and clear error messange

    const setError = (element, errorMsg, errorContainer) => {
        element.classList.add("error");
        errorContainer.innerHTML = errorMsg;
    }

    const clearError = (element, errorContainer) => {
        element.classList.remove("error");
        errorContainer.innerHTML = "";
    }

    let isValid = true; //Track overall validation
    
    // check username input

    if(usernameValue === ""){
        setError(username, "សូមបំពេញឈ្មោះអ្នកប្រើប្រាស់", userErrorMsg);
        isValid = false;
        console.log("Please enter your username.");
    }
    else if(usernameValue.length < 6 ) {
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរយ៉ាងតិច6តួ", userErrorMsg);
        isValid = false;
        console.log("The username must contain at least 6 characters.");
    }
    else if(usernameValue.length > 16 ) {
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរច្រើនបំផុត16តួ", userErrorMsg);
        isValid = false;
        console.log("The username must contain a maximum of 16 characters.")
    }
    else if (!textRegex.test(usernameValue)) { 
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរ និងលេខប៉ុណ្ណោះ", userErrorMsg);
        isValid = false;
        console.log("The username must contain only letters and numbers.");
    }
    else if (numberRegex.test(usernameValue)) { 
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់មិនអាចចាប់ផ្តើមដោយលេខ", userErrorMsg);
        isValid = false;
        console.log("The username cannot start with a number.");
    }
    else {
        clearError(username, userErrorMsg);
        console.log("The username is valid.")
    }

    // check password input

    if(passwordValue === ""){
        setError(password, "សូមបំពេញលេខសម្ងាត់", passErrorMsg);
        isValid = false;
        console.log("Please enter your password.")
    }
    else if(passwordValue.length < 6) {
        setError(password, "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច6តួ", passErrorMsg);
        isValid = false;
        console.log("The password must contain at least 6 characters.");
    }
    else if(passwordValue.length > 16) {
        setError(password, "ពាក្យសម្ងាត់ត្រូវមានច្រើនបំផុត16តួ", passErrorMsg);
        isValid = false;
        console.log("The password must contain a maximum of 16 characters.");
    }
    else {
       clearError(password, passErrorMsg);
       console.log("The password is valid");
    }

    // check remember me checkbox
    rememberMe.checked ? console.log('Remember checkbox is ', true) : console.log('Remember checkbox is', false);

    // Login status
    if (isValid) {
        if (
            usernameValue === userStore.username &&
            passwordValue === userStore.password
        ) {
            loginStatus.innerHTML = "Login successful!";
            loginStatus.className = "loginSuccess";
            loginForm.reset();

            console.table(`username : ${usernameValue}\npassword : ${passwordValue}`);
            console.log("Login successful.")
        } else {
            loginStatus.innerHTML = "ឈ្មោះអ្នកប្រើប្រាស់ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ";
            loginStatus.className = "loginError";

            console.table(`username : ${usernameValue}\npassword : ${passwordValue}`);
            console.log("Login failed.")
        }
    } 
    else {
        loginStatus.innerHTML = ""; 
    }
};