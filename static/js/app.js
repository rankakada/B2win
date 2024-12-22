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
        toggleMenu(false);
    }
});

// Promotion Modal homepage
const promotionModal = document.querySelector(".promotion-modal");
const btnOpenModal = document.querySelectorAll(".open-modal");
const btnCloseModal = document.querySelectorAll(".close-modal");

// Function to toggle modal visibility
const toggleModal = (isVisible) => {
    promotionModal.style.display = isVisible ? "block" : "none";
};

// Function to popup modal
const popupModal = (card) => {
    const promotionImage = promotionModal.querySelector(".promotion-image");
    const promotionDescription = promotionModal.querySelector(".promotion-description");
    const promotionId = promotionModal.querySelector(".promotion-id");

    // Get data from card
    const cardTitle = card.dataset.title;
    const cardDescription = card.dataset.description;
    const cardImage = card.dataset.image;

    // Popup modal content
    promotionImage.src = cardImage;
    promotionDescription.textContent = cardDescription;
    promotionId.textContent = cardTitle;
};

// btn for opening modal
btnOpenModal.forEach((card) => {
    card.addEventListener("click", () => {
        popupModal(card); // Populate modal with card data
        toggleModal(true); // Open the modal
    });
});

// btn for closing modal
btnCloseModal.forEach((btn) => {
    btn.addEventListener("click", () => toggleModal(false));
});

// close modal when click outside modal content
promotionModal.addEventListener("click", (e) => {
    if (e.target === promotionModal) {
        toggleModal(false);
    }
});
