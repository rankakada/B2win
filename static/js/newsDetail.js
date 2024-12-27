import newsData from "./data/newsData.js";
import { Menu } from './modules/menu.js';
import { Snowflake } from "./modules/snow.js";

// Initialize the menu and snowfall function
Menu();
Snowflake();

const renderMainNews = (news) => {
    const mainNewsWrapper = document.querySelector('.main-news-wrapper');
    mainNewsWrapper.innerHTML = `
        <div class="news-title big-title">${news.title}</div>
        <div class="news-content-wrapper">
            <div class="news-image">
                <img src="${news.img}" alt="news">
            </div>
            <div class="right-content">
                <div class="date-wrapper">
                    <div class="calender-icon"><img src="static/assets/icons/calendar.svg" alt="calender-icon"></div>
                    <span class="news-date">${news.date}</span>
                </div>
                <div class="news-title small-title">${news.title}</div>
            </div>
        </div>
        <div class="news-description">
            ${news.description}
        </div>
    `;
}

const renderLatestNews = (latestNews) => {
    const latestNewsWrapper = document.querySelector('.latest-news-item-wrapper');
    latestNews.forEach (news => {
        const newsItem = document.createElement('a');
        newsItem.className = 'latest-news-item';
        newsItem.href = news.url;
        newsItem.innerHTML = `
            <div class="news-image">
                <img src="${news.img}" alt="news">
            </div>
            <div class="content-wrapper">
                <p class="news-title">${news.title}</p>
                <div class="date-wrapper">
                    <div class="calender-icon">
                        <img src="static/assets/icons/calendar.svg" alt="calender-icon">
                    </div>
                    <span class="news-date">${news.date}</span>
                </div>
            </div>
        `;
        latestNewsWrapper.appendChild(newsItem);
    })
}

renderMainNews(newsData[0]);
renderLatestNews(newsData.slice(1,6));

console.table(newsData[0]);
console.table(newsData.slice(1,6));