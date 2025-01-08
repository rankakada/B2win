const registerForm = document.querySelector(".form-register");
const togglePassword = document.querySelector(".eye");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const phoneNumber = document.querySelector(".phoneNumber");
const affiliate = document.querySelector(".affiliate");
const code = document.querySelector(".code");
const randomCode = document.querySelector(".code-random");
const registerStatus = document.getElementById("registerStatus");

// toggle password visibility
togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("fa-eye-slash");
    togglePassword.classList.toggle("fa-eye");
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
    
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Retrieve 'fid' from the URL
// const affiliateId = getQueryParam("fid");
// if (affiliateId) {
//     const affiliateInput = document.getElementById("affiliate");
//     if (affiliateInput) {
//         affiliateInput.value = affiliateId;
//     }
// }

// From validation
registerForm.onsubmit = (e) => {
    e.preventDefault();
    validateInputs();
}

const validateInputs = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let phoneNumberValue = phoneNumber.value.trim();
    let affiliateValue = affiliate.value.trim();
    let codeValue = code.value.trim();
    let randomCodeValue = randomCode.value.trim();
    let userErrorMsg = document.getElementById("userErrorMsg");
    let passErrorMsg = document.getElementById("passErrorMsg");
    let phoneErrorMsg = document.getElementById("phoneErrorMsg");
    let affiliateErrorMsg = document.getElementById("affiliateErrorMsg");
    let codeErrorMsg = document.getElementById("codeErrorMsg");

    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;
    const cambodianPhoneRegex = /^(?:\+855[1-9]\d{7,8}|0[1-9]\d{7,8})$/;

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

    // Phone number Validation
    if(phoneNumberValue === "") {
        setError(phoneNumber, "phoneNumberEmpty" , phoneErrorMsg);
        isValid = false;
    }
    else if (!phoneNumberValue.startsWith("+855") && !phoneNumberValue.startsWith("0")) {
        setError(phoneNumber, "phoneNumberInvalidStart", phoneErrorMsg);
    }
    else if(!cambodianPhoneRegex.test(phoneNumberValue)) {
        setError(phoneNumber, "phoneNumberInvalid", phoneErrorMsg);
        isValid = false;
    }
    else {
        clearError(phoneNumber, phoneErrorMsg);
    }

    // affiliate validation 
    if(affiliateValue !== affiliateId && affiliateValue !== "") {
        setError(affiliate, "affiliateInvalid", affiliateErrorMsg);
        isValid = false;
    } else {
        clearError(affiliate, affiliateErrorMsg);
    }
    
    // Register Logic
    if (isValid) {
           // virify code validation 
        if(codeValue === "") {
            setError(code, "codeEmpty", codeErrorMsg);
        }
        else if(codeValue !== randomCodeValue) {
            setError(code, "codeInvalid", codeErrorMsg);
        }
        else {
            clearError(code, codeErrorMsg);
            registerStatus.setAttribute("data-i18n", "registerSuccess");
            registerStatus.innerHTML = i18next.t("registerSuccess");
            registerStatus.className = "registerSuccess";
            registerForm.reset();

            console.table(`username : ${usernameValue}\npassword : ${passwordValue}\number phone : ${phoneNumberValue}\naffiliate : ${affiliateValue}`);
        }
    } 
    else {
        registerStatus.innerHTML = "";
    }
};
