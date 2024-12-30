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

document.addEventListener("DOMContentLoaded", () => {
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
});


// activeMenu.js
document.addEventListener("DOMContentLoaded", () => {
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
});

document.addEventListener("DOMContentLoaded", () => {
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
    let currentLanguage = localStorage.getItem('language') || 'en';

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
});