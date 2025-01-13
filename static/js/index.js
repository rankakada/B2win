// initial home page data
const data = {
    message : "សូមស្វាគមន៍មកកាន់ B2Win វេបសាយទំនុកចិត្តបំផុត មានហ្គេមសម្បូរបែប ផ្ដល់ជូនបងប្អូននូវ សេវាកម្មដកដាក់ប្រាក់រហ័ស ប្រម៉ូសិនការផ្ដល់ជូនច្រើនសន្ធឹកសន្ធាប់ ឈ្នះច្រើនដកច្រើនគ្មានដែនកំណត់ សុវត្ថិភាពបំផុតជាងគេ!" ,
  
    desktopBanners: [
      {
        "image": "./static/assets/images/banners/desktop-banner1.jpg",
        "alt": "Banner"
      }
    ],
  
    mobileBanners: [
      {
        "image": "./static/assets/images/banners/mobile-banner1.jpg",
        "alt": "Banner"
      }
    ],
  
    games: [
      {
        id:1,
        "image": "./static/assets/images/games/game1.jpg",
        "alt": "Game 1",
        "link": "login.html"
      },
      {
        id:2,
        "image": "./static/assets/images/games/game2.jpg",
        "alt": "Game 2",
        "link": "login.html"
      },
      {
        id:3,
        "image": "./static/assets/images/games/game3.jpg",
        "alt": "Game 3",
        "link": "login.html"
      },
      {
        id:4,
        "image": "./static/assets/images/games/game4.jpg",
        "alt": "Game 4",
        "link": "login.html"
      },
      {
        id:5,
        "image": "./static/assets/images/games/game5.jpg",
        "alt": "Game 5",
        "link": "login.html"
      }
    ],
  
    matches: [
      {
        homeTeam: {
          name: "Barcelona",
          logo: "./static/assets/images/matches/barcelona.png"
        },
        awayTeam: {
          name: "Atletico Madrid",
          logo: "./static/assets/images/matches/AtleticoMadrid.png"
        },
        league: "Laliga",
        date: "22 Dec 2024"
      },
      {
        homeTeam: {
          name: "Manchester City",
          logo: "./static/assets/images/matches/ManchesterCity.png"
        },
        awayTeam: {
          name: "Manchester United",
          logo: "static/assets/images/matches/ManchesterUnited.png"
        },
        league: "Premier League",
        date: "15 Dec 2024"
      },
      {
        homeTeam: {
          name: "Arsenal",
          logo: "./static/assets/images/matches/Arsenal.png"
        },
        awayTeam: {
          name: "Crystal Palace",
          logo: "./static/assets/images/matches/CrystalPalace.png"
        },
        league: "Premier League",
        date: "22 Dec 2024"
      },
      {
        homeTeam: {
          name: "Real Madrid",
          logo: "./static/assets/images/matches/RealMadrid.webp"
        },
        awayTeam: {
          name: "Sevilla",
          logo: "./static/assets/images/matches/Sevilla.png"
        },
        league: "Laliga",
        date: "22 Dec 2024"
      },
      {
        homeTeam: {
          name: "Bayern",
          logo: "./static/assets/images/matches/BayernMünchen.png"
        },
        awayTeam: {
          name: "RB Leipzig",
          logo: "./static/assets/images/matches/RBLeipzig.png"
        },
        league: "Bundesliga",
        date: "22 Dec 2024"
      }
    ],
  
    promotions: [
      {
        "title": "Promotion #1",
        "description": "លុយទឹកប្រចាំថ្ងៃ 2%",
        "image": "./static/assets/images/promotions/promotion1.jpg"
      },
      {
        "title": "Promotion #2",
        "description": "សមាជិកថ្មីថែម 100%",
        "image": "./static/assets/images/promotions/promotion2.jpg"
      },
      {
        "title": "Promotion #3",
        "description": "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
        "image": "./static/assets/images/promotions/promotion3.jpg"
      },
      {
        "title": "Promotion #4",
        "description": "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
        "image": "./static/assets/images/promotions/promotion4.jpg"
      }
    ],
};

// Welcome modal
const welcomeModal = document.querySelector('.welcome-modal');
const btnCloseWelcomeModal = document.querySelector('.btn-close-welcomeModal');
const expired_time = 1 * 60 * 60 * 1000;  // 1h
// const expired_time = 10 * 1000;
const lastShownTime = localStorage.getItem("welcomeModal");
const currentTime = new Date().getTime();

// Load modal
if (!lastShownTime || currentTime - lastShownTime > expired_time) {
    welcomeModal.style.display = "flex";
    localStorage.removeItem("welcomeModal");
}

//Button for Closing modal 
btnCloseWelcomeModal.addEventListener('click', () => {
    welcomeModal.style.display = 'none';
    localStorage.setItem("welcomeModal", currentTime);
});

// inititial variables
const messageMarquee = document.querySelector('.message');
const desktopBannerWrapper = document.querySelector('.desktop-banner-wrapper');
const mobileBannerWrapper = document.querySelector('.mobile-banner-wrapper');
const gameContainer = document.querySelector('.game-container');
const matchWrapper = document.querySelector('.match-wrapper');
const promotionWrapper = document.querySelector('.promotion-wrapper');

const promotionModal = document.querySelector('.promotion-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

//Render Message
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

// Render desktop and mobile banners
createBannerSlides(data.desktopBanners, desktopBannerWrapper);
createBannerSlides(data.mobileBanners, mobileBannerWrapper);

// Render Games
const renderGames = (games) => {
    games.forEach((game) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `<a href="${game.link}" class="game-link"><img src="${game.image}" alt="${game.alt}" class="game-image"></a>`;
        gameContainer.appendChild(gameCard);
    });
};

renderGames(data.games);

//Render Matches
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

renderMatches(data.matches);

//Render Promotions
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
        });
        promotionWrapper.appendChild(promotionCard);
    });
};

renderPromotions(data.promotions);

// toggle modal visibility
const toggleModal = (isVisible) => {
    promotionModal.style.display = isVisible ? "block" : "none";
};

//Promotion Popup modal
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

// Swiper Handler
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

// Get 'fid' from the URL
const urlParams = new URLSearchParams(window.location.search);
const fid = urlParams.get('fid');

if (fid) {
  // Store 'fid' in localStorage for future use
  localStorage.setItem('fid', fid);
  console.log(`FID: ${fid}`);
}