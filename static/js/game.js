const games = [
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
      id:6,
      type: "sport",
      name: "Sport",
      image: "./static/assets/images/games/game5.jpg",
    },
    {
      id:7,
      type: "joker",
      name: "Slot",
      image: "./static/assets/images/games/game1.jpg",
    },
    {
      id:8,
      type: "casino",
      name: "Sexy Casino",
      image: "./static/assets/images/games/game2.jpg",
    },
    {
      id:9,
      type: "casino",
      name: "K99 Casino",
      image: "./static/assets/images/games/game3.jpg",
    },
    {
      id:10,
      type: "sport",
      name: "Sport3",
      image: "./static/assets/images/games/game4.jpg",
    },
    {
      id:11,
      type: "sport",
      name: "Sport",
      image: "./static/assets/images/games/game5.jpg",
    },
    {
      id:12,
      type: "joker",
      name: "Slot",
      image: "./static/assets/images/games/game1.jpg",
    },
    {
      id:13,
      type: "casino",
      name: "Sexy Casino",
      image: "./static/assets/images/games/game2.jpg",
    },
    {
      id:14,
      type: "casino",
      name: "K99 Casino",
      image: "./static/assets/images/games/game3.jpg",
    },
    {
      id:15,
      type: "sport",
      name: "Sport3",
      image: "./static/assets/images/games/game4.jpg",
    },
    {
      id:16,
      type: "sport",
      name: "Sport",
      image: "./static/assets/images/games/game5.jpg",
    },
];

const paginationContainer = document.querySelector('.pagination-container');

// Set number of items per page
let currentPage = 1;
const itemsPerPage = 10;

let currentFilteredGames = []; 

const renderPaginationControls = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationContainer.innerHTML = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} class="btn-change-page">
            <i class="fa fa-angle-left"></i> Prev
        </button>
        <button class="active">${currentPage}</button>
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} class="btn-change-page">
            Next <i class="fa fa-angle-right"></i>
        </button>
    `;
};

const changePage = (page) => {
    const totalPages = Math.ceil(currentFilteredGames.length / itemsPerPage);
    if (page < 1 || page > totalPages) {
        return;
    }
    currentPage = page;
    renderGames(currentFilteredGames);
};

function renderGames(filteredGames) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const gameWrapper = document.querySelector('.game-wrapper');
    gameWrapper.innerHTML = ""; // Clear the container

    // Slice the games to the current page
    const currentGames = filteredGames.slice(start, end);

    currentGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game');
        gameCard.innerHTML = `
            <div class="game-content">
                <div class="game-image">
                    <img src="${game.image}" alt="${game.name}">
                </div>
                <div class="play-modal">
                    <a href="register.html" class="btn-play" data-i18n="play">Play</a>
                </div>
            </div>
            
        `;

        gameCard.dataset.image = game.image;
        gameWrapper.appendChild(gameCard);
    });

    // Render pagination controls
    paginationContainer.style.display = filteredGames.length > itemsPerPage ? "flex" : "none";
    renderPaginationControls(filteredGames.length);
}

function filterGames(type) {
    // Filter games based on the type
    currentFilteredGames = type === 'all'
        ? games
        : games.filter(game => game.type === type);

    // Update active menu
    document.querySelectorAll('.game-menu').forEach(menu => menu.classList.remove('active'));
    document.querySelector(`.game-menu[onclick="filterGames('${type}')"]`).classList.add('active');

    // Reset to the first page
    currentPage = 1;

    // Render filtered games
    renderGames(currentFilteredGames);
}

// Initialize with all games
currentFilteredGames = games;
renderGames(currentFilteredGames);