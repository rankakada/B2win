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

