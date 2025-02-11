// home page data
const data = {
  message : "សូមស្វាគមន៍មកកាន់ B2Win វេបសាយទំនុកចិត្តបំផុត មានហ្គេមសម្បូរបែប ផ្ដល់ជូនបងប្អូននូវ សេវាកម្មដកដាក់ប្រាក់រហ័ស ប្រម៉ូសិនការផ្ដល់ជូនច្រើនសន្ធឹកសន្ធាប់ ឈ្នះច្រើនដកច្រើនគ្មានដែនកំណត់ សុវត្ថិភាពបំផុតជាងគេ!" ,

  banners : {
    kh: {
      desktopBanners: [
        {
          id: 1,
          image: "./static/assets/images/banners/desktop-banner-kh1.jpg",
          alt: "Khmer Banner 1"
        },
        {
          id: 2,
          image: "./static/assets/images/banners/desktop-banner-kh2.jpg",
          alt: "Khmer Banner 2"
        }
      ],
      mobileBanners: [
        {
          id: 1,
          image: "./static/assets/images/banners/mobile-banner-kh1.jpg",
          alt: "Khmer Banner 1"
        },
        {
          id: 2,
          image: "./static/assets/images/banners/mobile-banner-kh2.jpg",
          alt: "Khmer Banner 2"
        }
      ]
    },
    en: {
      desktopBanners: [
        {
          id: 1,
          image: "./static/assets/images/banners/desktop-banner-en1.jpg",
          alt: "English Banner 1"
        },
        {
          id: 2,
          image: "./static/assets/images/banners/desktop-banner-en2.jpg",
          alt: "English Banner 2"
        }
      ],
      mobileBanners: [
        {
          id: 1,
          image: "./static/assets/images/banners/mobile-banner-en1.jpg",
          alt: "English Banner 1"
        },
        {
          id: 2,
          image: "./static/assets/images/banners/mobile-banner-en2.jpg",
          alt: "English Banner 2"
        }
      ]
    }
  },

  games: [
    {
      id:1,
      type: "joker",
      name: "Slot",
      image: "./static/assets/images/games/game1.jpg",
    },
    {
      id:2,
      type: "casino",
      name: "Sexy Casino",
      image: "./static/assets/images/games/game2.jpg",
    },
    {
      id:3,
      type: "casino",
      name: "K99 Casino",
      image: "./static/assets/images/games/game3.jpg",
    },
    {
      id:4,
      type: "sport",
      name: "Sport3",
      image: "./static/assets/images/games/game4.jpg",
    },
    {
      id:5,
      type: "sport",
      name: "Sport",
      image: "./static/assets/images/games/game5.jpg",
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
      id: 1,
      title: "សមាជិកថ្មីថែម 100%",
      description: "សមាជិកថ្មីថែម 100%",
      image: "./static/assets/images/promotions/promotion1.jpg"
    },
    {
      id: 2,
      title: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      description: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      image: "./static/assets/images/promotions/promotion2.jpg"
    },
    {
      id: 3,
      title: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      description: "ប្រាក់បង្វិលប្រចាំអាទិត្យ 5%",
      image: "./static/assets/images/promotions/promotion3.jpg"
    },
    {
      id: 4,
      title: "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
      description: "ណែនាំសមាជិកថ្មីទទួលបាន 5% រៀងរាល់ថ្ងៃ",
      image: "./static/assets/images/promotions/promotion4.jpg"
    },
  ],
};

// Selectors
const welcomeModal = document.querySelector('.welcome-modal');
const btnCloseWelcomeModal = document.querySelector('.btn-close-welcomeModal');
const messageMarquee = document.querySelector('.message');
const desktopBannerWrapper = document.querySelector('.desktop-banner-wrapper');
const mobileBannerWrapper = document.querySelector('.mobile-banner-wrapper');
const gameContainer = document.querySelector('.game-container');
const matchWrapper = document.querySelector('.match-wrapper');
const promotionWrapper = document.querySelector('.promotion-wrapper');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

// Constants
const expired_time = 1 * 60 * 60 * 1000;  // 1h
const lastShownTime = localStorage.getItem("welcomeModal");
const currentTime = new Date().getTime();

// Utility Functions
const toggleModal = (isVisible) => {
  modal.style.display = isVisible ? "block" : "none";
};

const createBannerSlides = (banners, wrapper) => {
  // Clear existing slides
  wrapper.innerHTML = '';

  // Add new slides
  banners.forEach((banner) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide slide';
    slide.innerHTML = `
      <img src="${banner.image}" alt="${banner.alt}" class="banner-image">
    `;
    wrapper.appendChild(slide);
  });
};

const renderGames = (games) => {
    games.forEach((game) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        const alt = game.name;
        gameCard.innerHTML = `
          <a href="login.html" class="game-link">
              <img src="${game.image}" alt="${alt}" class="game-image">
          </a>
        `;
        gameContainer.appendChild(gameCard);
    });
};

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

const renderPromotions = (promotions) => {
  promotions.forEach(promotion => {
    const promotionCard = document.createElement('div');
    promotionCard.className = 'swiper-slide promotion-card openModal';
    promotionCard.innerHTML = `<img src="${promotion.image}" alt="${promotion.title}">`;

    promotionCard.dataset.title = promotion.title;
    promotionCard.dataset.description = promotion.description;
    promotionCard.dataset.image = promotion.image;

    promotionCard.addEventListener("click", () => {
      popupPromotionModal(promotionCard);
      toggleModal(true);
    });
    promotionWrapper.appendChild(promotionCard);
  });
};


const popupPromotionModal = (card) => {
    const promotionTitle = document.querySelector('.promotion-title');
    const promotionImage = document.querySelector('.promotion-image');
    const promotionDescription = document.querySelector('.promotion-description');

    // Access data attributes from the clicked card
    const cardTitle = card.dataset.title;
    const cardDescription = card.dataset.description;
    const cardImage = card.dataset.image;

    // Set modal content
    promotionImage.src = cardImage;
    promotionDescription.textContent = cardDescription;
    promotionTitle.textContent = cardTitle;
};

// Modal Handlers
if (!localStorage.getItem("welcomeModal") || currentTime - localStorage.getItem("welcomeModal") > expired_time) {
  welcomeModal.style.display = "flex";
  localStorage.removeItem("welcomeModal");
}

btnCloseWelcomeModal.addEventListener('click', () => {
  welcomeModal.style.display = 'none';
  localStorage.setItem("welcomeModal", currentTime);
});

welcomeModal.addEventListener("click", (e) => {
  if (e.target === welcomeModal) {
    welcomeModal.style.display = 'none';
    localStorage.setItem("welcomeModal", currentTime);
  }
});

btnCloseModal.forEach((btn) => {
  btn.addEventListener("click", () => toggleModal(false));
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) toggleModal(false);
});

// Data Rendering
messageMarquee.textContent = data.message;
renderGames(data.games);
renderMatches(data.matches);
renderPromotions(data.promotions);

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

// URL Parameter Handling
const urlParams = new URLSearchParams(window.location.search);
const fid = urlParams.get('fid');
if (fid) localStorage.setItem('fid', fid);