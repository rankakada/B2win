const languages = {
    en: {
        livescore: "Live Score",
        sportNews: "Sports News",
        condition: "Condition",
        login: "Login",
        register: "Register",
        message: "Welcome to B2Win, the most trusted website with a wide range of games, offering you fast deposit and withdrawal services, lots of promotions, unlimited winnings, and the safest!",
        deposit: "Deposit",
        withdraw: "Withdraw",
        popularGame: "Popular Game",
        matchOfWeek: "Match of the week",
        promotion: "Promotion",
        privacy: "© 2024 B2WIN.com All Rights Reserved 18+",
        payment: "Payment Method",
        username: "Username",
        password: "Password",
        phoneNumber: "Phone number",
        currency: "Currency",
        affiliate: "Affiliate",
        code: "Code",
        usernamePlaceholder: "Enter your username",
        passwordPlaceholder: "Password",
        affiliatePlaceholder: "Affiliate",
        codePlaceholder: "Code",
        rememberMe: "Remember Me",
        submit: "Submit",
        goLogin: "Go to Login",
        goRegister: "Don't have an account? Register an account",
        registerByYourself: "Create Account By Yourself",
    },
    kh: {
        livescore: "គ្រាប់បាល់",
        sportNews: "ព័ត៌មានកីឡា",
        condition: "លក្ខខណ្ឌ",
        login: "ចូលលេង",
        register: "ចុះឈ្មោះ",
        message: "សូមស្វាគមន៍មកកាន់ B2Win វេបសាយទំនុកចិត្តបំផុត មានហ្គេមសម្បូរបែប ផ្ដល់ជូនបងប្អូននូវ សេវាកម្មដកដាក់ប្រាក់រហ័ស ប្រម៉ូសិនការផ្ដល់ជូនច្រើនសន្ធឹកសន្ធាប់ ឈ្នះច្រើនដកច្រើនគ្មានដែនកំណត់ សុវត្ថិភាពបំផុតជាងគេ!",
        deposit: "ដាក់ប្រាក់",
        withdraw: "ដកប្រាក់",
        popularGame: "ហ្គេមពេញនិយម",
        matchOfWeek: "គូប្រកួតសប្ដាហ៍នេះ",
        promotion: "ការផ្ដល់ជូនពិសេស",
        privacy: "© 2024 B2WIN.com រក្សាសិទ្ធគ្រប់យ៉ាង ១៨+",
        payment: "ទូទាត់ប្រាក់ជាមួយ",
        username: "ឈ្មោះ​អ្នកប្រើប្រាស់",
        password: "ពាក្យសម្ងាត់",
        phoneNumber: "លេខទូរសព្ទ",
        currency: "រូបិយប័ណ្ណ",
        affiliate: "អ្នកណែនាំ",
        code: "លេខកូដសុវត្ថិភាព",
        usernamePlaceholder: "បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់",
        passwordPlaceholder: "ពាក្យសម្ងាត់",
        affiliatePlaceholder: "ពាក្យសម្ងាត់",
        codePlaceholder: "លេខកូដសុវត្ថិភាព",
        rememberMe: "ចងចាំខ្ញុំ",
        submit: "ដាក់ស្នើ",
        goLogin: "ចូលទៅកាន់ Login",
        goRegister: "មិនមានគណនីមែនទេ? បង្កើតគណនី",
        registerByYourself: "បង្កើតគណនីដោយខ្លួនឯង",
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