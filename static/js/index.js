import data from './data/homeData.js';
document.addEventListener("DOMContentLoaded", () => {
    const messageMarquee = document.querySelector('.message');
    const desktopBannerWrapper = document.querySelector('.desktop-banner-wrapper');
    const mobileBannerWrapper = document.querySelector('.mobile-banner-wrapper');
    const gameContainer = document.querySelector('.game-container');
    const matchWrapper = document.querySelector('.match-wrapper');
    const promotionWrapper = document.querySelector('.promotion-wrapper');

    const promotionModal = document.querySelector('.promotion-modal');
    const btnCloseModal = document.querySelectorAll('.close-modal');

    // Message
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
    console.table(data.desktopBanners);
    console.table(data.mobileBanners);

    // Games
    const renderGames = (games) => {
        games.forEach((game) => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `<a href="${game.link}" class="game-link"><img src="${game.image}" alt="${game.alt}" class="game-image"></a>`;
            gameContainer.appendChild(gameCard);
        });
    };

    // Populate games
    renderGames(data.games);
    console.table(data.games);

    // Matches
    const renderMatches = (matches) => {
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
    renderMatches(data.matches);
    console.log(data.matches);

    // Promotions
    const renderPromotions = (promotions) => {
        promotions.forEach(promotion => {
            const promotionCard = document.createElement('div');
            promotionCard.className = 'swiper-slide promotion-card';
            promotionCard.innerHTML = `<img src="${promotion.image}" alt="${promotion.title}">`;

            promotionCard.dataset.title = promotion.title;
            promotionCard.dataset.description = promotion.description;
            promotionCard.dataset.image = promotion.image;

            // Open modal when clicked
            promotionCard.addEventListener("click", () => {
                popupModal(promotionCard); // Popup modal with promotion data
                toggleModal(true); // Open modal

                console.table(promotion);
            });
            promotionWrapper.appendChild(promotionCard);
        });
    };

    // Populate promotions
    renderPromotions(data.promotions);
    console.table(data.promotions);

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
});

document.addEventListener("DOMContentLoaded", () => {
    // Banner Swiper
    new Swiper(".bannerSwiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,
        autoplay: {
            delay: 5000,
        },
    });

    // Matches Swiper
    new Swiper(".matchSwiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
            1536: {
                slidesPerView: 4,
            },
        },
    });

    // Promotion Swiper
    new Swiper(".promotionSwiper", {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            1280: {
                slidesPerView: 3,
            },
            1536: {
                slidesPerView: 4,
            },
        },
    });
});