import { Menu } from './modules/menu.js';
import { Snowflake } from "./modules/snow.js";

Menu();
Snowflake();

const languages = {
    en: {
        usernameEmpty: "Please enter your username.",
        usernameMin: "The username must contain at least 6 characters.",
        usernameMax: "The username must contain a maximum of 16 characters.",
        usernameInvalid: "The username must contain only letters and numbers.",
        usernameStartsWithNumber: "The username cannot start with a number.",
        passwordEmpty: "Please enter your password.",
        passwordMin: "The password must contain at least 6 characters.",
        passwordMax: "The password must contain a maximum of 16 characters.",
        loginSuccess: "Login successful!",
        loginError: "Invalid username or password."
    },
    kh: {
        usernameEmpty: "សូមបំពេញឈ្មោះអ្នកប្រើប្រាស់",
        usernameMin: "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរយ៉ាងតិច6តួ",
        usernameMax: "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរច្រើនបំផុត16តួ",
        usernameInvalid: "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរ និងលេខប៉ុណ្ណោះ",
        usernameStartsWithNumber: "ឈ្មោះអ្នកប្រើប្រាស់មិនអាចចាប់ផ្តើមដោយលេខ",
        passwordEmpty: "សូមបំពេញលេខសម្ងាត់",
        passwordMin: "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច6តួ",
        passwordMax: "ពាក្យសម្ងាត់ត្រូវមានច្រើនបំផុត16តួ",
        loginSuccess: "ការចូលប្រើប្រាស់បានជោគជ័យ!",
        loginError: "ឈ្មោះអ្នកប្រើប្រាស់ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ"
    }
};

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

// toggle password visibility
togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("fa-eye-slash");
    togglePassword.classList.toggle("fa-eye");
});

// username input to uppercase
username.addEventListener("input", () => {
    username.value = username.value.toUpperCase();
});

// Form validation on submit
loginForm.onsubmit = (e) => {
    e.preventDefault();  
    validateInputs();  
};

const validateInputs = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let userErrorMsg = document.getElementById("userErrorMsg");
    let passErrorMsg = document.getElementById("passErrorMsg");
    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;

    const setError = (element, errorMsg, errorContainer) => {
        element.classList.add("error");
        errorContainer.innerHTML = errorMsg;
    }

    const clearError = (element, errorContainer) => {
        element.classList.remove("error");
        errorContainer.innerHTML = "";
    }

    // check remember me checkbox
    rememberMe.checked ? console.log('Remember checkbox is ', true) : console.log('Remember checkbox is', false);

    let isValid = true;

    // Username validation
    if (usernameValue === "") {
        setError(username, languages[currentLanguage].usernameEmpty, userErrorMsg);
        isValid = false;
        console.log("Please enter your username.");
    }
    else if (usernameValue.length < 6) {
        setError(username, languages[currentLanguage].usernameMin, userErrorMsg);
        isValid = false;
        console.log("The username must contain at least 6 characters.");
    }
    else if (usernameValue.length > 16) {
        setError(username, languages[currentLanguage].usernameMax, userErrorMsg);
        isValid = false;
        console.log("The username must contain a maximum of 16 characters.")
    }
    else if (!textRegex.test(usernameValue)) {
        setError(username, languages[currentLanguage].usernameInvalid, userErrorMsg);
        isValid = false;
        console.log("The username must contain only letters and numbers.");
    }
    else if (numberRegex.test(usernameValue)) {
        setError(username, languages[currentLanguage].usernameStartsWithNumber, userErrorMsg);
        isValid = false;
        console.log("The username cannot start with a number.");
    }
    else {
        clearError(username, userErrorMsg);
        console.log("The username is valid.");
    }

    // Password validation
    if (passwordValue === "") {
        setError(password, languages[currentLanguage].passwordEmpty, passErrorMsg);
        isValid = false;
        console.log("Please enter your password.")
    }
    else if (passwordValue.length < 6) {
        setError(password, languages[currentLanguage].passwordMin, passErrorMsg);
        isValid = false;
        console.log("The password must contain at least 6 characters.");
    }
    else if (passwordValue.length > 16) {
        setError(password, languages[currentLanguage].passwordMax, passErrorMsg);
        isValid = false;
        console.log("The password must contain a maximum of 16 characters.");
    }
    else {
        clearError(password, passErrorMsg);
        console.log("The password is valid.");
    }

    // Login logic
    if (isValid) {
        if (usernameValue === userStore.username && passwordValue === userStore.password) {
            loginStatus.innerHTML = languages[currentLanguage].loginSuccess;
            loginStatus.className = "loginSuccess";
            loginForm.reset();
            console.log(languages[currentLanguage].loginSuccess);
        } else {
            loginStatus.innerHTML = languages[currentLanguage].loginError;
            loginStatus.className = "loginError";
            console.log(languages[currentLanguage].loginError);
        }
    } else {
        loginStatus.innerHTML = "";
    }
};

const switchLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = languages[lang][key];
    
        if (translation) {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    currentLanguage = lang; 
}

const toggleLanguage = document.querySelector('.toggle-language');

let currentLanguage = 'kh';

toggleLanguage.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'kh' ? 'en' : 'kh';
    switchLanguage(currentLanguage);

    const icon = toggleLanguage.querySelector('img');
    if (currentLanguage === 'en') {
        icon.src = 'static/assets/icons/en.svg'; 
        console.log("You changed language to English");
    } else {
        icon.src = 'static/assets/icons/kh.svg'; 
        console.log("You changed language to Khmer");
    }
});

switchLanguage(currentLanguage);
