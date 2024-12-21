// Menu Modal

const mobileMenu = document.querySelector(".mobile-menu");
const btnOpenMenu = document.querySelector(".open-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");

const toggleMenu = (isVisible) => {
    mobileMenu.style.display = isVisible ? "block" : "none";
}

btnOpenMenu.addEventListener("click", () => toggleMenu(true));
btnCloseMenu.addEventListener("click", () => toggleMenu(false));

mobileMenu.addEventListener("click", (e) => {
    if(e.target === mobileMenu) {
        mobileMenu.style.display = "none";
    }
});

// Promotion Modal homepage

const promotionModal = document.querySelector(".promotion-modal");
const btnOpenModal = document.querySelectorAll(".open-modal");
const btnCloseModal = document.querySelectorAll(".close-modal");

const toggleModal = (isVisible) => {
    promotionModal.style.display = isVisible ? "block" : "none";
}

btnOpenModal.forEach(btn => btn.addEventListener("click", () => toggleModal(true)));
btnCloseModal.forEach(btn => btn.addEventListener("click", () => toggleModal(false)));

promotionModal.addEventListener("click", (e)=>{
    if(e.target === promotionModal) {
        promotionModal.style.display = "none";
    }
});
