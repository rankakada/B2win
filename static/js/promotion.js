promotions = [
    {
      id: 1,
      type: "sport",
      title: "សមាជិកថ្មីថែម 100%",
      description: "សមាជិកថ្មីថែម 100%",
      image: "./static/assets/images/promotions/promotion1.jpg"
    },
    {
      id: 2,
      type: "keno",
      title: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      description: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      image: "./static/assets/images/promotions/promotion2.jpg"
    },
    {
      id: 3,
      type: "sport",
      title: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      description: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      image: "./static/assets/images/promotions/promotion3.jpg"
    },
    {
      id: 4,
      type: "cock",
      title: "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
      description: "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
      image: "./static/assets/images/promotions/promotion4.jpg"
    },
    {
      id: 5,
      type: "casino",
      title: "សមាជិកថ្មីថែម 100%",
      description: "សមាជិកថ្មីថែម 100%",
      image: "./static/assets/images/promotions/promotion5.jpg"
    },
    {
      id: 6,
      type: "cock",
      title: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      description: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      image: "./static/assets/images/promotions/promotion6.jpg"
    },
    {
      id: 7,
      type: "sport",
      title: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      description: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      image: "./static/assets/images/promotions/promotion7.jpg"
    },
    {
      id: 8,
      type: "keno",
      title: "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
      description: "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
      image: "./static/assets/images/promotions/promotion8.jpg"
    },
];

function renderPromotions(filteredPromotions) {
    const promotionWrapper = document.getElementById('promotionWrapper');
    promotionWrapper.innerHTML = ''; // Clear the container
    filteredPromotions.forEach(promotion => {
        const promotionCard = document.createElement('div');
        promotionCard.classList.add('promotion');
        promotionCard.innerHTML = `
            <img src="${promotion.image}" alt="${promotion.title}">
            <h4 class="promotion-title">${promotion.title}</h4>
        `;

        promotionCard.dataset.title = promotion.title;
        promotionCard.dataset.description = promotion.description;
        promotionCard.dataset.image = promotion.image;
        
        promotionCard.addEventListener("click", () => {
            popupPromotionModal(promotionCard); // Popup modal with promotion data
              toggleModal(true); // Open modal
          });
        promotionWrapper.appendChild(promotionCard);
    });
}

function filterPromotions(type) {
    const filteredPromotions = type === 'all'? promotions : promotions.filter(promotion => promotion.type === type);
    
    // Update active menu
    document.querySelectorAll('.promotion-menu').forEach(menu => menu.classList.remove('active'));
    document.querySelector(`.promotion-menu[onclick="filterPromotions('${type}')"]`).classList.add('active');
    
    // Render filtered promotions
    renderPromotions(filteredPromotions);
}

// Initialize with all promotions
renderPromotions(promotions);

const promotionModal = document.querySelector('.promotion-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');


// toggle modal visibility
const toggleModal = (isVisible) => {
    promotionModal.style.display = isVisible ? "block" : "none";
};

//Promotion Popup modal
const popupPromotionModal = (card) => {
    const promotionId = document.querySelector('.promotion-id');
    const promotionImage = document.querySelector('.promotion-image');
    const promotionDescription = document.querySelector('.promotion-description');

    // Access data attributes from the clicked card
    const cardTitle = card.dataset.title;
    const cardDescription = card.dataset.description;
    const cardImage = card.dataset.image;

    // Set modal content
    promotionImage.src = cardImage;
    promotionDescription.textContent = cardDescription;
    promotionId.textContent = cardTitle;
};

// Buttons for closing modal
btnCloseModal.forEach((btn) => {
    btn.addEventListener("click", () => toggleModal(false));
});

// Close modal when clicking outside of the modal content
promotionModal.addEventListener("click", (e) => {
    if (e.target === promotionModal) {
        toggleModal(false);
    }
});
