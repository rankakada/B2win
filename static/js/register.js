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

// affiliate input to uppercase

affiliate.addEventListener("input", () => {
    affiliate.value = affiliate.value.toUpperCase();
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
    let codeValue = randomCode.value.trim();
    let randomCodeValue = code.value.trim();
    let userErrorMsg = document.getElementById("userErrorMsg");
    let passErrorMsg = document.getElementById("passErrorMsg");
    let phoneErrorMsg = document.getElementById("phoneErrorMsg");
    const affiliateStore = ["B2000000", "B2000001", "B2000002", "B2000003", "B2000004", "B2000005"];

    const textRegex = /^[A-Z0-9]+$/;
    const numberRegex = /^\d/;
    const cambodianPhoneRegex = /^(?:\+855[1-9]\d{7,8}|0[1-9]\d{7,8})$/;

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

    // Check username input

    if(usernameValue === "") {
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

    // Check password input

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

    // Check phone number input

    if(numberPhoneValue === "") {
        setError(numberPhone, "សូមបំពេញលេខទូរសព្ទ", phoneErrorMsg);
        isValid = false;
    }
    else if (!numberPhoneValue.startsWith("+855") && !numberPhoneValue.startsWith("0")) {
        setError(numberPhone, "លេខទូរសព្ទត្រូវចាប់ផ្ដើមដោយ +855 ឬ លេខ 0", phoneErrorMsg);
    }
    else if(!cambodianPhoneRegex.test(numberPhoneValue)) {
        setError(numberPhone, "លេខទូរសព្ទមិនត្រឹមត្រូវ​ សូមពិនិត្យម្ដងទៀត", phoneErrorMsg);
        isValid = false;
    }
    else {
        clearError(numberPhone, phoneErrorMsg);
    }

    //  Register status

    if(isValid) {
        if(affiliateValue !== "" && !affiliateStore.includes(affiliateValue)) {
            registerStatus.innerHTML = "ឈ្មោះអ្នកណែនាំមិនត្រឹមត្រូវ";
            registerStatus.className = "registerError";
        }
        else if (codeValue === "" || codeValue!== randomCodeValue) {
            registerStatus.innerHTML = "លេខកូដសម្ងាត់មិនត្រឹមត្រូវ";
            registerStatus.className = "registerError";
        }
        else {
           registerStatus.innerHTML = "ការបង្កើតគណនីទទួលបានជោគជ័យ";
           registerStatus.className = "registerSuccess";
           registerForm.reset();
        }
    }
    else {
        registerStatus.innerHTML = ""; 
    }
}