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
        phoneNumberEmpty: "Please enter your phone number.",
        phoneNumberInvalidStart: "The phone number must start with +855 or the number 0.",
        phoneNumberInvalid: "The phone number is invalid. Please check it again.",
        affiliateInvalid: "The affiliate is incorrect.",
        codeInvalid: "The verify code is incorrect.",
        registerSuccess: "Account creation was successful!",
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
        phoneNumberEmpty: "សូមបំពេញលេខទូរសព្ទ",
        phoneNumberInvalidStart: "លេខទូរសព្ទត្រូវចាប់ផ្ដើមដោយ +855 ឬ លេខ 0",
        phoneNumberInvalid: "លេខទូរសព្ទមិនត្រឹមត្រូវ​ សូមពិនិត្យម្ដងទៀត",
        affiliateInvalid: "ឈ្មោះអ្នកណែនាំមិនត្រឹមត្រូវ",
        codeInvalid: "លេខកូដសម្ងាត់មិនត្រឹមត្រូវ",
        registerSuccess: "ការបង្កើតគណនីទទួលបានជោគជ័យ",
    }
};

document.addEventListener("DOMContentLoaded", () => {
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
            setError(username, languages[currentLanguage].usernameEmpty, userErrorMsg);
            isValid = false;
    
            console.log("Please enter your username.");
        }
        else if(usernameValue.length < 6 ) {
            setError(username, languages[currentLanguage].usernameMin, userErrorMsg);
            isValid = false;
    
            console.log("The username must contain at least 6 characters.");
        }
        else if(usernameValue.length > 16 ) {
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
            console.log("The username is valid.")
        }
    
        // Check password input
    
        if(passwordValue === ""){
            setError(password, languages[currentLanguage].passwordEmpty, passErrorMsg);
            isValid = false;
    
            console.log("Please enter your password.")
        }
        else if(passwordValue.length < 6) {
            setError(password, languages[currentLanguage].passwordMin, passErrorMsg);
            isValid = false;
    
            console.log("The password must contain at least 6 characters.");
        }
        else if(passwordValue.length > 16) {
            setError(password, languages[currentLanguage].passwordMax, passErrorMsg);
            isValid = false;
    
            console.log("The password must contain a maximum of 16 characters.");
        }
        else {
           clearError(password, passErrorMsg);
           console.log("The password is valid");
        }
    
        // Check phone number input
    
        if(phoneNumberValue === "") {
            setError(phoneNumber, languages[currentLanguage].phoneNumberEmpty, phoneErrorMsg);
            isValid = false;
    
            console.log("Please enter your phone nnumber.");
        }
        else if (!phoneNumberValue.startsWith("+855") && !phoneNumberValue.startsWith("0")) {
            setError(phoneNumber, languages[currentLanguage].phoneNumberInvalidStart, phoneErrorMsg);
    
            console.log("The phone number must start with +855 or the number 0.");
        }
        else if(!cambodianPhoneRegex.test(phoneNumberValue)) {
            setError(phoneNumber, languages[currentLanguage].phoneNumberInvalid, phoneErrorMsg);
            isValid = false;
    
            console.log("The phone number is invalid. Please check it again.");
        }
        else {
            clearError(phoneNumber, phoneErrorMsg);
            console.log("The phone number is valid");
        }
    
        //  Register status
    
        if(isValid) {
            if(affiliateValue !== affiliateId && affiliateValue !== "") {
                registerStatus.innerHTML = languages[currentLanguage].affiliateInvalid;
                registerStatus.className = "registerError";
                
                console.log(`affiliate : ${affiliateValue}`);
                console.log("The affiliate is incorrect.");
                console.log("Register failed.")
            }
            else if (codeValue === "" || codeValue!== randomCodeValue) {
                registerStatus.innerHTML = languages[currentLanguage].codeInvalid;
                registerStatus.className = "registerError";
    
                console.log("The verify code is incorrect.");
                console.log("Register failed.")
            }
            else {
                registerStatus.innerHTML = languages[currentLanguage].registerSuccess;
                registerStatus.className = "registerSuccess";
                registerForm.reset();
    
                console.table(`username : ${usernameValue}\npassword : ${passwordValue}\number phone : ${phoneNumberValue}\naffiliate : ${affiliateValue}`);
                console.log("Register successful.")
            }
        }
        else {
            registerStatus.innerHTML = ""; 
        }
    }
    
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
        clearFormErrors();
    
        const icon = toggleLanguage.querySelector('img');
        if (currentLanguage === 'en') {
            icon.src = 'static/assets/icons/en.svg'; 
            console.log("You changed language to English");
        } else {
            icon.src = 'static/assets/icons/kh.svg'; 
            console.log("You changed language to Khmer");
        }
    });
    
    const clearFormErrors = () => {
        userErrorMsg.innerHTML = "";
        passErrorMsg.innerHTML = "";
        phoneErrorMsg.innerHTML = "";
        registerStatus.innerHTML = "";
        username.classList.remove("error");
        password.classList.remove("error");
        phoneNumber.classList.remove("error");
        registerStatus.className = "";

    };
    
    switchLanguage(currentLanguage);
});