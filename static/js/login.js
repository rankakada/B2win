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
        errorContainer.setAttribute('data-i18n-error', errorMsgKey);
        errorContainer.innerHTML = i18next.t(errorMsgKey);
    };

    // Clear error messages
    const clearError = (element, errorContainer) => {
        element.classList.remove("error");
        errorContainer.removeAttribute('data-i18n-error'); 
        errorContainer.innerHTML = "";
    };

    // Re-translate error messages on language change
    i18next.on('languageChanged', () => {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const i18nKey = element.getAttribute("data-i18n");
            if (i18nKey) {
                element.innerHTML = i18next.t(i18nKey);
            }
        });
        document.querySelectorAll('[data-i18n-error]').forEach((element) => {
            const errorKey = element.getAttribute('data-i18n-error');
            if (errorKey) {
                element.innerHTML = i18next.t(errorKey);
            }
        });
    });

    // check valid value
    let isValid = true;

    // Username Validation
    if (usernameValue === "") {
        setError(username, "usernameEmpty", userErrorMsg);
        isValid = false;
    } else if (usernameValue.length < 6) {
        setError(username, "usernameMin", userErrorMsg);
        isValid = false;
    } else if (usernameValue.length > 16) {
        setError(username, "usernameMax", userErrorMsg);
        isValid = false;
    } else if (!textRegex.test(usernameValue)) {
        setError(username, "usernameInvalid", userErrorMsg);
        isValid = false;
    } else if (numberRegex.test(usernameValue)) {
        setError(username, "usernameStartsWithNumber", userErrorMsg);
        isValid = false;
    } else {
        clearError(username, userErrorMsg);
    }

    // Password Validation
    if (passwordValue === "") {
        setError(password, "passwordEmpty", passErrorMsg);
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, "passwordMin", passErrorMsg);
        isValid = false;
    } else if (passwordValue.length > 16) {
        setError(password, "passwordMax", passErrorMsg);
        isValid = false;
    } else {
        clearError(password, passErrorMsg);
    }

    // Checkbox
    const isRemember = rememberMe.checked;

    const user = {
        id: 1,
        username: `${usernameValue}`,
        password: `${passwordValue}`,
        isRemember: `${isRemember}`,
    }

    // Login Logic
    if (isValid) {
        if (usernameValue !== userStore.username && passwordValue !== userStore.password) {
            setError(username, "incorrectUsername", userErrorMsg);
            setError(password, "incorrectPassword", passErrorMsg);
            console.log(user);
        }
        else if (usernameValue !== userStore.username) {
            setError(username, "incorrectUsername", userErrorMsg);
        }
        else if (passwordValue !== userStore.password) {
            setError(password, "incorrectPassword", passErrorMsg);
            console.log(user);
        }
        else {
            loginForm.reset();
            console.log(user);
        }
    }
};
