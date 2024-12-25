import data from './data/data.js';
import { Menu } from './modules/menu.js';
import { Snowflake } from "./modules/snow.js";

// Initialize the menu and snowfall function
Menu();
Snowflake();

const messageMarquee = document.querySelector('.message');
const desktopBannerWrapper = document.querySelector('.desktop-banner-wrapper');
const mobileBannerWrapper = document.querySelector('.mobile-banner-wrapper');
const gameContainer = document.querySelector('.game-container');
const matchWrapper = document.querySelector('.match-wrapper');
const promotionWrapper = document.querySelector('.promotion-wrapper');

const promotionModal = document.querySelector('.promotion-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

// Messgae
messageMarquee.textContent = data.message;

// Function to create slides
const createBannerSlides = (banners, wrapper) => {
    banners.forEach((banner) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide slide';
        slide.innerHTML = `
            <img src="${banner.image}" alt="${banner.alt}" class="banner-image">
        `;
        wrapper.appendChild(slide);
    });
};

// Populate desktop and mobile banners
createBannerSlides(data.desktopBanners, desktopBannerWrapper);
createBannerSlides(data.mobileBanners, mobileBannerWrapper);

// Games
const populateGames = (games) => {
    games.forEach((game) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `<a href="${game.link}" class="game-link"><img src="${game.image}" alt="${game.alt}" class="game-image"></a>`;
        gameContainer.appendChild(gameCard);
    });
};

// Populate game
populateGames(data.games);

// Matches

const populateMatches = (matches) => {
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'swiper-slide match-card';
    
        matchCard.innerHTML = `
          <div class="match">
            <div class="team">
              <img src="${match.homeTeam.logo}" alt="${match.homeTeam.name}" class="team-logo">
              <span class="team-name">${match.homeTeam.name}</span>
            </div>
            <div class="match-details">
              <span class="league">${match.league}</span>
              <span class="date">${match.date}</span>
            </div>
            <div class="team">
              <img src="${match.awayTeam.logo}" alt="${match.awayTeam.name}" class="team-logo">
              <span class="team-name">${match.awayTeam.name}</span>
            </div>
          </div>
        `;
    
        matchWrapper.appendChild(matchCard);
    });
};

// Populate matches
populateMatches(data.matches);

// Promotion

const populatePromotions = (promotions) => {
    promotions.forEach(promotion => {
        const promotionCard = document.createElement('div');
        promotionCard.className = 'swiper-slide promotion-card';
        promotionCard.innerHTML = `<img src="${promotion.image}" alt="${promotion.title}">`;
        
        promotionCard.dataset.title = promotion.title;
        promotionCard.dataset.description = promotion.description;
        promotionCard.dataset.image = promotion.image;

        // open modal when click
        promotionCard.addEventListener("click", () => {
            popupModal(promotionCard); // Popup modal with promotion data
            toggleModal(true); // Open modal
        });
        promotionWrapper.appendChild(promotionCard);
    });
};
// populate promotions
populatePromotions(data.promotions);

// Function to toggle modal visibility
const toggleModal = (isVisible) => {
    promotionModal.style.display = isVisible ? "block" : "none";
};

// Function to popup modal
const popupModal = (card) => {
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

// Button for closing modal
btnCloseModal.forEach((btn) => {
    btn.addEventListener("click", () => toggleModal(false));
});

// Close modal when clicking outside of the modal content
promotionModal.addEventListener("click", (e) => {
    if (e.target === promotionModal) {
        toggleModal(false);
    }
});