// Menu Modal
// const mobileMenu = document.querySelector(".mobile-menu");
// const btnOpenMenu = document.querySelector(".open-menu");
// const btnCloseMenu = document.querySelector(".btn-close-menu");

// const toggleMenu = (isVisible) => {
//     mobileMenu.style.display = isVisible ? "block" : "none";
// }

// btnOpenMenu.addEventListener("click", () => toggleMenu(true));
// btnCloseMenu.addEventListener("click", () => toggleMenu(false));

// mobileMenu.addEventListener("click", (e) => {
//     if(e.target === mobileMenu) {
//         toggleMenu(false);
//     }
// });

// menu.js
export const Menu = () => {
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

