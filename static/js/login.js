const username = document.querySelector(".username");
const password = document.querySelector(".password");
const togglePassword = document.querySelector(".eye");
const loginForm = document.querySelector(".form-login");
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
    }
    else {
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
        password.type = "password";
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
    }
    else if(usernameValue.length < 6 ) {
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរយ៉ាងតិច6តួ", userErrorMsg);
        isValid = false;
    }
    else if(usernameValue.length > 16 ) {
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរច្រើនបំផុត16តួ", userErrorMsg);
        isValid = false;
    }
    else if (!textRegex.test(usernameValue)) { 
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរ និងលេខប៉ុណ្ណោះ", userErrorMsg);
        isValid = false;
    }
    else if (numberRegex.test(usernameValue)) { 
        setError(username, "ឈ្មោះអ្នកប្រើប្រាស់មិនអាចចាប់ផ្តើមដោយលេខ", userErrorMsg);
        isValid = false;
    }
    else {
        clearError(username, userErrorMsg);
    }

    // check password input

    if(passwordValue === ""){
        setError(password, "សូមបំពេញលេខសម្ងាត់", passErrorMsg);
        isValid = false;
    }
    else if(passwordValue.length < 6) {
        setError(password, "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច6តួ", passErrorMsg);
        isValid = false;
    }
    else if(passwordValue.length > 16) {
        setError(password, "ពាក្យសម្ងាត់ត្រូវមានច្រើនបំផុត16តួ", passErrorMsg);
        isValid = false;
    }
    else {
       clearError(password, passErrorMsg);
    }

    if (isValid) {
        if (
            usernameValue === userStore.username &&
            passwordValue === userStore.password
        ) {
            loginStatus.innerHTML = "Login successful!";
            loginStatus.className = "loginSuccess";
            loginForm.reset();
        } else {
            loginStatus.innerHTML = "ឈ្មោះអ្នកប្រើប្រាស់ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ";
            loginStatus.className = "loginError";
        }
    } 
    else {
        loginStatus.innerHTML = ""; 
    }
};