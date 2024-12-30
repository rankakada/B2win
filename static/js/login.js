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

document.addEventListener("DOMContentLoaded", () => { 
    const username = document.querySelector(".username");
    const password = document.querySelector(".password");
    const togglePassword = document.querySelector(".eye");
    const loginForm = document.querySelector(".form-login");
    const rememberMe = document.querySelector("#remember");
    const loginStatus = document.getElementById("loginStatus");
    const toggleLanguage = document.querySelector('.toggle-language');
    const userErrorMsg = document.getElementById("userErrorMsg");
    const passErrorMsg = document.getElementById("passErrorMsg");

    let currentLanguage = 'kh';
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

    // Validate and handle form submission
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        validateInputs();
    };

    const validateInputs = () => {
        let usernameValue = username.value.trim();
        let passwordValue = password.value.trim();
        const textRegex = /^[A-Z0-9]+$/;
        const numberRegex = /^\d/;

        const setError = (element, errorMsg, errorContainer) => {
            element.classList.add("error");
            errorContainer.innerHTML = errorMsg;
        };

        const clearError = (element, errorContainer) => {
            element.classList.remove("error");
            errorContainer.innerHTML = "";
        };

        clearFormErrors();

        let isValid = true;

        // Username Validation
        if (usernameValue === "") {
            setError(username, languages[currentLanguage].usernameEmpty, userErrorMsg);
            isValid = false;
        } else if (usernameValue.length < 6) {
            setError(username, languages[currentLanguage].usernameMin, userErrorMsg);
            isValid = false;
        } else if (usernameValue.length > 16) {
            setError(username, languages[currentLanguage].usernameMax, userErrorMsg);
            isValid = false;
        } else if (!textRegex.test(usernameValue)) {
            setError(username, languages[currentLanguage].usernameInvalid, userErrorMsg);
            isValid = false;
        } else if (numberRegex.test(usernameValue)) {
            setError(username, languages[currentLanguage].usernameStartsWithNumber, userErrorMsg);
            isValid = false;
        }

        // Password Validation
        if (passwordValue === "") {
            setError(password, languages[currentLanguage].passwordEmpty, passErrorMsg);
            isValid = false;
        } else if (passwordValue.length < 6) {
            setError(password, languages[currentLanguage].passwordMin, passErrorMsg);
            isValid = false;
        } else if (passwordValue.length > 16) {
            setError(password, languages[currentLanguage].passwordMax, passErrorMsg);
            isValid = false;
        }

        // Login Logic
        if (isValid) {
            if (usernameValue === userStore.username && passwordValue === userStore.password) {
                loginStatus.innerHTML = languages[currentLanguage].loginSuccess;
                loginStatus.className = "loginSuccess";
                loginForm.reset();
            } else {
                loginStatus.innerHTML = languages[currentLanguage].loginError;
                loginStatus.className = "loginError";
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
        clearFormErrors();
    };

    const clearFormErrors = () => {
        userErrorMsg.innerHTML = "";
        passErrorMsg.innerHTML = "";
        username.classList.remove("error");
        password.classList.remove("error");
    };

    const icon = toggleLanguage.querySelector('img');
        if (currentLanguage === 'en') {
            icon.src = 'static/assets/icons/en.svg'; 
            console.log("You changed language to English");
        } else {
            icon.src = 'static/assets/icons/kh.svg'; 
            console.log("You changed language to Khmer");
        }
    switchLanguage(currentLanguage);
});
