import newsData from "./data/newsData.js";

document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector('.news-container');

    const renderNews = () =>{
        newsData.forEach(news => {
            const newsWrapper = document.createElement('a');
            newsWrapper.className = 'news-wrapper';
            newsWrapper.href = news.url;
            newsWrapper.innerHTML = `
                <div class="news-image">
                    <img src="${news.img}" alt="news">
                </div>
                <div class="title-wrapper">
                    <p class="news-title">${news.title}</p>
                    <div class="date-wrapper">
                        <img src="static/assets/icons/calendar.svg" alt="date" class="calendar-icon">
                        <span class="news-date">${news.date}</span>
                    </div>
                </div>
            `;
            newsContainer.appendChild(newsWrapper);
        })
    }

    renderNews(newsData);
    console.table(newsData);

});