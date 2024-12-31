import newsData from './data/newsData.js';

document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector('.news-container');

    const renderNewsList = () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.delete("id");
        history.replaceState(null, "", `?${urlSearchParams.toString()}`);

        newsContainer.innerHTML = `
            <div class="news-list-container">
                ${newsData.map((news) => `    
                    <div class="news-wrapper">
                        <div onclick="viewNewsArticle(${news.id})">
                            <div class="news-image">
                                <img src="${news.img}" alt="${news.title}">
                            </div>
                            <div class="title-wrapper">
                                <p class="news-title">${news.title}</p>
                                <div class="date-wrapper">
                                    <img src="static/assets/icons/calendar.svg" alt="date" class="calendar-icon">
                                    <span class="news-date">${new Date(news.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
    };

    const renderNews = (news) => {
        newsContainer.innerHTML = `
            <div class="news-detail-container">
                <div class="main-news-wrapper">
                    <div class="news-title big-title">${news.title}</div>
                    <div class="news-content-wrapper">
                        <div class="news-image">
                            <img src="${news.img}" alt="news">
                        </div>
                        <div class="right-content">
                            <div class="date-wrapper">
                                <div class="calendar-icon"><img src="static/assets/icons/calendar.svg" alt="calendar-icon"></div>
                                <span class="news-date">${new Date(news.date).toLocaleDateString()}</span>
                            </div>
                            <div class="news-title small-title">${news.title}</div>
                        </div>
                    </div>
                    <div class="news-description">
                        ${news.description}
                    </div>
                </div>
                <div class="latest-news-wrapper">
                    <span class="title">អត្ថបទចុងក្រោយ</span>
                    <div class="latest-news-item-wrapper">
                        ${newsData.map((latestNews) => `
                            <div onclick="viewNewsArticle(${latestNews.id})" class="news-items">
                                <img src="${latestNews.img}" alt="${latestNews.title}">
                                <div>
                                    <p>${latestNews.title.slice(0, 25)}...</p>
                                    <div class="date-wrapper">
                                        <div class="calendar-icon"><img src="static/assets/icons/calendar.svg" alt="calendar-icon"></div>
                                        <span class="news-date">${new Date(latestNews.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;
    };

    window.viewNewsArticle = (id) => {
        const article = newsData.find((item) => item.id === id);
        if (article) {
            history.pushState(null, "", `?id=${id}`);
            renderNews(article);
        }
    };

    const initializeNews = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get("id"), 10);

        if (id) {
            const article = newsData.find((item) => item.id === id);
            if (article) {
                renderNews(article);
                return;
            }
        }
        renderNewsList();
    };

    // Initialize the page on load
    initializeNews();

    // Handle browser back/forward navigation
    window.onpopstate = initializeNews;
});
