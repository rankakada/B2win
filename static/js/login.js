const username = document.querySelector(".username");
const password = document.querySelector(".password");
const togglePassword = document.querySelector(".eye");
const loginForm = document.querySelector(".form-login");

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

    if(usernameValue === ""){
        username.classList.add("error");
        userErrorMsg.innerHTML = "សូមបំពេញឈ្មោះអ្នកប្រើប្រាស់";
    }
    else if(usernameValue.length < 6 ) {
        userErrorMsg.innerHTML = "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរយ៉ាងតិច6តួ";
    }
    else if(usernameValue.length > 16 ) {
        userErrorMsg.innerHTML = "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវមានតួអក្សរច្រើនបំផុត16តួ";
    }
    else {
        username.classList.remove("error");
        userErrorMsg.innerHTML = "";
    }

    if(passwordValue === ""){
        password.classList.add("error");
        passErrorMsg.innerHTML = "សូមបំពេញឈ្មោះអ្នកប្រើប្រាស់";
    }
} 