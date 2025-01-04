// initial variables
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const togglePassword = document.querySelector(".eye");
const loginForm = document.querySelector(".form-login");
const rememberMe = document.querySelector("#remember");
const loginStatus = document.getElementById("loginStatus");
const userErrorMsg = document.getElementById("userErrorMsg");
const passErrorMsg = document.getElementById("passErrorMsg");

// Local user for test login
const userStore = { username: "TEST123", password: "123123" };

// Password visibility toggle
togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("fa-eye-slash");
    togglePassword.classList.toggle("fa-eye");
});

// Username to uppercase
username.addEventListener("input", () => {
    username.value = username.value.toUpperCase();
});

// Validate and handle form submit
loginForm.onsubmit = (e) => {
    e.preventDefault();
    validateInputs();
};

//  Input validations 
const validateInputs = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;

    // Set error messages
    const setError = (element, errorMsgKey, errorContainer) => {
        element.classList.add("error");
        errorContainer.innerHTML = i18next.t(errorMsgKey);
    };

    // Clear error messages
    const clearError = (element, errorContainer) => {
        element.classList.remove("error");
        errorContainer.innerHTML = "";
    };

    // check valid value
    let isValid = true;

    // Username Validation
    if (usernameValue === "") {
        setError(username, "usernameEmpty", userErrorMsg);
        isValid = false;
        console.log("Please enter your username.");
    } else if (usernameValue.length < 6) {
        setError(username, "usernameMin", userErrorMsg);
        isValid = false;
        console.log("The username must contain at least 6 characters.");
    } else if (usernameValue.length > 16) {
        setError(username, "usernameMax", userErrorMsg);
        isValid = false;
        console.log("The username must contain a maximum of 16 characters.")
    } else if (!textRegex.test(usernameValue)) {
        setError(username, "usernameInvalid", userErrorMsg);
        isValid = false;
    } else if (numberRegex.test(usernameValue)) {
        setError(username, "usernameStartsWithNumber", userErrorMsg);
        isValid = false;
        console.log("The username must contain only letters and numbers.");
    } else {
        clearError(username, userErrorMsg);
        console.log("The username is valid.")
    }

    // Password Validation
    if (passwordValue === "") {
        setError(password, "passwordEmpty", passErrorMsg);
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, "passwordMin", passErrorMsg);
        isValid = false;
        console.log("The password must contain at least 6 characters.");
    } else if (passwordValue.length > 16) {
        setError(password, "passwordMax", passErrorMsg);
        isValid = false;
        console.log("The password must contain a maximum of 16 characters.");
    } else {
        clearError(password, passErrorMsg);
        console.log("The password is valid");
    }

    // Login Logic
    if (isValid) {
        // check user password if valid login success
        if (usernameValue === userStore.username && passwordValue === userStore.password) {
            loginStatus.innerHTML = i18next.t("loginSuccess");
            loginStatus.className = "loginSuccess";
            loginForm.reset();
        } 
        // if invalid show error message
        else {
            loginStatus.innerHTML = i18next.t("loginError");
            loginStatus.className = "loginError";
        }
    } else {
        loginStatus.innerHTML = "";
    }
};
