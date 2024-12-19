const registerForm = document.querySelector(".form-register");
const togglePassword = document.querySelector(".eye");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const numberPhone = document.querySelector(".numberPhone");
const affiliate = document.querySelector(".affiliate");
const code = document.querySelector(".code");
const randomCode = document.querySelector(".code-random");
const registerStatus = document.getElementById("registerStatus");

// toggle password

togglePassword.addEventListener("click", () => {
    if(password.type === "password") {
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
        password.type = "text";
    }
    else {
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
        password.type = "password";
    }
});

// Generate a random 5-digit code

const generateRandomCode = () => {
    return Math.floor(10000 + Math.random() * 90000);
}

randomCode.value = generateRandomCode();

//username input to uppercase

username.addEventListener("input", () => {
    username.value = username.value.toUpperCase();
});

// From validation

registerForm.onsubmit = (e) => {
    e.preventDefault();
    validateInputs();
}

const validateInputs = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let numberPhoneValue = numberPhone.value.trim();
    let affiliateValue = affiliate.value.trim();
    let codeValue = code.value.trim();
    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;
}

// function to add and clear error messange

const setError = (element, errorMsg, errorContainer) => {
    element.classList.add("error");
    errorContainer.innerHTML = errorMsg;
}

const clearError = (element, errorContainer) => {
    element.classList.remove("error");
    errorContainer.innerHTML = errorMsg;
}

let isValid = true; //Track overall validation

// Check username input

// if(usernameValue === "") {

// }