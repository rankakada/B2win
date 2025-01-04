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

console.log("verify code is ", randomCode.value);

//username input to uppercase

username.addEventListener("input", () => {
    username.value = username.value.toUpperCase();
});
    
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Retrieve 'fid' from the URL
const affiliateId = getQueryParam("fid");
if (affiliateId) {
    const affiliateInput = document.getElementById("affiliate");
    if (affiliateInput) {
        affiliateInput.value = affiliateId;
    }
}

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

    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;
    const cambodianPhoneRegex = /^(?:\+855[1-9]\d{7,8}|0[1-9]\d{7,8})$/;

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

    // Phone number Validation
    if(phoneNumberValue === "") {
        setError(phoneNumber, "phoneNumberEmpty" , phoneErrorMsg);
        isValid = false;
        console.log("Please enter your phone nnumber.");
    }
    else if (!phoneNumberValue.startsWith("+855") && !phoneNumberValue.startsWith("0")) {
        setError(phoneNumber, "phoneNumberInvalidStart", phoneErrorMsg);
        console.log("The phone number must start with +855 or the number 0.");
    }
    else if(!cambodianPhoneRegex.test(phoneNumberValue)) {
        setError(phoneNumber, "phoneNumberInvalid", phoneErrorMsg);
        isValid = false;
        console.log("The phone number is invalid. Please check it again.");
    }
    else {
        clearError(phoneNumber, phoneErrorMsg);
        console.log("The phone number is valid");
    }

    
    // Register Logic
    if (isValid) {
        // affiliate validation 
        if(affiliateValue !== affiliateId && affiliateValue !== "") {
            registerStatus.innerHTML = i18next.t("affiliateInvalid");
            registerStatus.className = i18next.t("registerError");
            
            console.log(`affiliate : ${affiliateValue}`);
            console.log("The affiliate is incorrect.");
            console.log("Register failed.")
        }
        // virify code validation 
        else if (codeValue === "" || codeValue!== randomCodeValue) {
            registerStatus.innerHTML = i18next.t("codeInvalid");
            registerStatus.className = i18next.t("registerError");

            console.log("The verify code is incorrect.");
            console.log("Register failed.")
        }
        // register success message
        else {
            registerStatus.innerHTML = i18next.t("registerSuccess");
            registerStatus.className = "registerSuccess";
            registerForm.reset();

            console.table(`username : ${usernameValue}\npassword : ${passwordValue}\number phone : ${phoneNumberValue}\naffiliate : ${affiliateValue}`);
            console.log("Register successful.")
        }
    } 
    else {
        registerStatus.innerHTML = "";
    }
};
