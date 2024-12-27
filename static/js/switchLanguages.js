const languages = {
    en: {
        livescore: "Live Score",
        sportNews: "Sports News",
        condition: "Conditions",
        login: "Login",
        register: "Register",
        message: "Welcome to B2Win, the most trusted website with a wide range of games, offering you fast deposit and withdrawal services, lots of promotions, unlimited winnings, and the safest!",
        deposit: "Deposit",
        withdraw: "Withdraw",
        popularGame: "Popular Game",
        matchOfWeek: "Match of the week",
        promotion: "Promotion",
        privacy: "© 2024 B2WIN.com All Rights Reserved 18+",
        peyment: "Payment Method"
    },
    km: {
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
        peyment: "ទូទាត់ប្រាក់ជាមួយ"
    }
};

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const langKey = element.getAttribute('data-lang-key');
        if (languages[language] && languages[language][langKey]) {
            element.textContent = languages[language][langKey];
        }
    });
}

// Language toggle button
const languageToggleButton = document.querySelector('.toggle-language');

// Check initial language (assuming Khmer as default)
let currentLanguage = 'km';

languageToggleButton.addEventListener('click', () => {
    // Toggle between Khmer and English
    currentLanguage = currentLanguage === 'km' ? 'en' : 'km';
    switchLanguage(currentLanguage);

    // Optional: Toggle the language icon on the button
    const icon = languageToggleButton.querySelector('img');
    if (currentLanguage === 'en') {
        icon.src = 'static/assets/icons/en.svg'; // Change icon for English
    } else {
        icon.src = 'static/assets/icons/kh.svg'; // Change icon for Khmer
    }
});

// Set the initial language
switchLanguage(currentLanguage);