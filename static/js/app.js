// Mobile menu handler
const Menu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const btnOpenMenu = document.querySelector(".open-menu");
    const btnCloseMenu = document.querySelector(".btn-close-menu");

    const toggleMenu = (isVisible) => {
        mobileMenu.style.display = isVisible ? "block" : "none";
    };

    btnOpenMenu.addEventListener("click", () => toggleMenu(true));
    btnCloseMenu.addEventListener("click", () => toggleMenu(false));

    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            toggleMenu(false);
        }
    });
};

Menu();

// active menu
const navLinks = document.querySelectorAll('.nav-list'); 
const currentUrl = window.location.pathname;

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href'); 
    if (currentUrl.endsWith(linkHref)) {
        link.classList.add('active'); 
    } 
    else {
        link.classList.remove('active'); 
    }
});

// Define bank information
const banks = [
    {id:1, name: "ABA", icon: "static/assets/icons/bank/aba.png" },
    {id:2, name: "Wing", icon: "static/assets/icons/bank/wing.png" },
    {id:3, name: "Acleda", icon: "static/assets/icons/bank/acleda.jpeg" },
    {id:4, name: "TrueMoney", icon: "static/assets/icons/bank/truemoney.png" },
    {id:5, name: "PiPay", icon: "static/assets/icons/bank/pipay.png" },
    {id:6, name: "USDT", icon: "static/assets/icons/bank/usdt.png" }
];

// Select the bank-wrapper element
const bankWrapper = document.querySelector('.bank-wrapper');

// Dynamically populate the bank logos
banks.forEach(bank => {
    const bankElement = document.createElement('li');
    bankElement.classList.add('bank');

    const imgElement = document.createElement('img');
    imgElement.src = bank.icon;
    imgElement.alt = bank.name; // Generate alt text from the bank name

    bankElement.appendChild(imgElement);
    bankWrapper.appendChild(bankElement);
});

const bankModal = document.querySelector('.bank-modal');
const closeBankModal = document.querySelector('.close-bankModal');
const openBankModal = document.querySelectorAll('.bank');

// toggle modal visibility
const toggleBankModal = (isVisible) => {
    bankModal.style.display = isVisible ? "block" : "none";
};

// Buttons for open modal
openBankModal.forEach((btn) => {
    btn.addEventListener("click", () => toggleBankModal(true));
})

// Buttons for closing modal
closeBankModal.addEventListener("click", () => toggleBankModal(false));

// Close modal when clicking outside of the modal content
bankModal.addEventListener("click", (e) => {
    if (e.target === bankModal) {
        toggleBankModal(false);
    }
});

// translation handler
i18next.init({
    lng: 'kh', // Default language
    resources: {
        kh: {
            translation: {
                livescore: "គ្រាប់បាល់",
                sportNews: "ព័ត៌មានកីឡា",
                condition: "លក្ខខណ្ឌ",
                login: "ចូលលេង",
                register: "ចុះឈ្មោះ",
                messages: "សូមស្វាគមន៍មកកាន់ B2Win វេបសាយទំនុកចិត្តបំផុត មានហ្គេមសម្បូរបែប ផ្ដល់ជូនបងប្អូននូវ សេវាកម្មដកដាក់ប្រាក់រហ័ស ប្រម៉ូសិនការផ្ដល់ជូនច្រើនសន្ធឹកសន្ធាប់ ឈ្នះច្រើនដកច្រើនគ្មានដែនកំណត់ សុវត្ថិភាពបំផុតជាងគេ!",
                deposit: "ដាក់ប្រាក់",
                withdraw: "ដកប្រាក់",
                popularGame: "ហ្គេមពេញនិយម",
                matchOfWeek: "គូប្រកួតសប្ដាហ៍នេះ",
                promotion: "ការផ្ដល់ជូនពិសេស",
                username: "ឈ្មោះ​អ្នកប្រើប្រាស់",
                password: "ពាក្យសម្ងាត់",
                phoneNumber: "លេខទូរសព្ទ",
                currency: "រូបិយប័ណ្ណ",
                affiliate: "អ្នកណែនាំ",
                code: "លេខកូដសុវត្ថិភាព",
                usernamePlaceholder: "បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់",
                passwordPlaceholder: "ពាក្យសម្ងាត់",
                affiliatePlaceholder: "អ្នកណែនាំ",
                codePlaceholder: "លេខកូដសុវត្ថិភាព",
                rememberMe: "ចងចាំខ្ញុំ",
                submit: "ដាក់ស្នើ",
                goLogin: "ចូលទៅកាន់ Login",
                goRegister: "មិនមានគណនីមែនទេ? បង្កើតគណនី",
                registerByYourself: "បង្កើតគណនីដោយខ្លួនឯង",
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
                codeEmpty: "សូមបំពេញលេខកូដសម្ងាត់",
                codeInvalid: "លេខកូដសម្ងាត់មិនត្រឹមត្រូវ",
                incorrectUsername: "ឈ្មោះអ្នកប្រើប្រាស់មិនត្រឹមត្រូវ!",
                incorrectPassword: "ពាក្យសម្ងាត់មិនត្រឹមត្រូវ!",
                registerSuccess: "ការបង្កើតគណនីទទួលបានជោគជ័យ!",
                footerText: "សូមស្វាគមន៍មកកាន់ B2WIN ដែលជាក្រុមហ៊ុនភ្នាល់ល្បែងតាមអ៊ិនធរណេតឈានមុខគេមួយនៅលើពិភពលោកផ្តល់ជូនសមាជិកពីគ្រប់ទិសទីនូវជម្រើសក្នុងការលេងកីឡាកីឡាអេឡិចត្រូនិកកាស៊ីណូបន្តផ្ទាល់ស្លតហ្គេមនិងភ្នាល់លើព្រឹត្តិការណ៍កីឡាផ្សេងៗ។",
                quickLinks: "តំណ​ភ្ជាប់​រហ័ស",
                aboutUs: "អំពីពួកយើង",
                termsOfUse: "លក្ខខណ្ឌនៃការប្រើប្រាស់",
                responsibleGaming: "ការទទួលខុសត្រូវហ្គេម",
                infoCenter: "មជ្ឈមណ្ឌលព័ត៌មាន",
                rewards: "រង្វាន់",
                ContactUs: "ទាក់ទង​មក​ពួក​យើង",
                privacy: "© 2024 B2WIN.com រក្សាសិទ្ធគ្រប់យ៉ាង ១៨+",
                payment: "វិធី​សា​ស្រ្ត​ទូទាត់ប្រាក់", 
                viewAll: "មើលទាំងអស់",
                modalTitle: "របៀបដាក់ប្រាក់",   
                all: "ទាំងអស់",
                sport: "កីឡា",
                cock: "មាន់ជល់",
                keno: "គីណូ",
                casino: "កាស៊ីណូ",        
            }
        },
        en: {
            translation: {
                livescore: "Live Score",
                sportNews: "Sports News",
                condition: "Condition",
                login: "Login",
                register: "Register",
                messages: "Welcome to B2Win, the most trusted website with a wide range of games, offering you fast deposit and withdrawal services, lots of promotions, unlimited winnings, and the safest!",
                deposit: "Deposit",
                withdraw: "Withdraw",
                popularGame: "Popular Game",
                matchOfWeek: "Match of the week",
                promotion: "Promotion",
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
                affiliateInvalid: "The affiliate is incorrect!",
                codeEmpty: "Please enter the verify code",
                codeInvalid: "The verify code is incorrect!",
                incorrectUsername: "Username is incorrect!",
                incorrectPassword: "Password is incorrect!",            
                registerSuccess: "Account creation was successful!",
                footerText: "Welcome to B2WIN, one of the world’s leading online gambling brands, provides members from all over the world an option to play Sportsbook, eSports, Live Casino, Slots, lottery games and place their bets on various Sports events.",
                quickLinks: "QUICK LINKS",
                aboutUs: "About Us",
                termsOfUse: "Terms Of Use",
                responsibleGaming: "Responsible Gaming",
                infoCenter: "Info Center",
                rewards: "Rewards",
                ContactUs: "Contact us",
                privacy: "© 2024 B2WIN.com All Rights Reserved 18+",
                payment: "Payment Method",
                viewAll: "View All",
                modalTitle: "How To Deposit",
                all: "All",
                sport: "Sport",
                cock: "Cock",
                keno: "Keno",
                casino: "Casino", 
            }
        }
    }
}, function(err, t) {
    if (err) {
        console.error("Error loading translations", err);
    }
    updateContent();
});

// update content handler
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.innerText = i18next.t(key); 
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
        const key = element.getAttribute('data-i18n-placeholder');
        element.setAttribute('placeholder', i18next.t(key)); // Translate the placeholder
    });
}

// Function to update banners when language changes
const updateBannersOnLanguageChange = (language) => {
    const currentDesktopBanners = data.banners[language].desktopBanners;
    const currentMobileBanners = data.banners[language].mobileBanners;
  
    // Update desktop and mobile banners
    createBannerSlides(currentDesktopBanners, desktopBannerWrapper);
    createBannerSlides(currentMobileBanners, mobileBannerWrapper);
  
    // Reinitialize Swiper instance if needed
    if (window.desktopSwiper) {
      window.desktopSwiper.update();
    }
    if (window.mobileSwiper) {
      window.mobileSwiper.update();
    }
};

// using localStorage to save language and icons
const savedLanguage = localStorage.getItem("language") || "kh";
const savedIcon = localStorage.getItem("icon") || "static/assets/icons/kh.svg"; 
const icon = document.querySelector('.toggle-language img');
icon.src = savedIcon;

// change language handle
i18next.changeLanguage(savedLanguage, updateContent);
if (document.body.classList.contains('home')) {
    updateBannersOnLanguageChange(savedLanguage);
}

// toggle language handler
document.querySelector(".toggle-language").addEventListener("click", () => {
    const currentLanguage = i18next.language === "kh" ? "en" : "kh";
    const icon = document.querySelector('.toggle-language img');
    let iconPath = '';
    if (currentLanguage === 'kh') {
        iconPath = 'static/assets/icons/kh.svg';  
    } else {
        iconPath = 'static/assets/icons/en.svg'; 
    }

    i18next.changeLanguage(currentLanguage, updateContent);
    localStorage.setItem("language", currentLanguage);
    localStorage.setItem("icon", iconPath);
    icon.src = iconPath;

    if (document.body.classList.contains('home')) {
        updateBannersOnLanguageChange(currentLanguage);
    }

});

// Snowflake handler
document.addEventListener('DOMContentLoaded', () => {
    const numberOfSnowflakes = 100;
    const maxSnowflakesSize = 5;
    const maxSnowflakesSpeed = 0.1;
    const snowflakeColor = '#ddd';
    const snowflakes = [];

    // Create canvas
    const canvas = document.getElementById('snowflake');
    canvas.style.position = 'fixed'; // Fixed ensures it sticks to the viewport
    canvas.style.pointerEvents = 'none';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const adjustCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    adjustCanvasSize();

    // Snowflake factory
    const createSnowflake = () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.floor(Math.random() * maxSnowflakesSize) + 1,
        color: snowflakeColor,
        speed: Math.round((Math.random() * maxSnowflakesSpeed + 0.5) * 10) / 10, // Round to 1 decimal
        sway: Math.round((Math.random() - 0.5) * 10) / 10, // Round to 1 decimal
    });

    // Draw a snowflake
    const drawSnowflake = snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = snowflake.color;
        ctx.fill();
        ctx.closePath();
    };

    // Update a snowflake's position
    const updateSnowflake = snowflake => {
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.sway;

        // Reset snowflake if it goes off-screen
        if (snowflake.y > canvas.height) {
            snowflake.y = 0; // Reset to top
            snowflake.x = Math.random() * canvas.width; // Randomize x position
        }

        // Wrap around horizontally
        if (snowflake.x > canvas.width) {
            snowflake.x = 0;
        } else if (snowflake.x < 0) {
            snowflake.x = canvas.width;
        }
    };

    // Animation loop
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach(snowflake => {
            updateSnowflake(snowflake);
            drawSnowflake(snowflake);
        });

        requestAnimationFrame(animate);
    };

    // Create snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }

    // Handle window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustCanvasSize, 200);
    });

    // Start the animation
    animate();
});