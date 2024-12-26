import newsData from "./data/newsData.js";
import { Menu } from './modules/menu.js';
import { Snowflake } from "./modules/snow.js";

// Initialize the menu and snowfall function
Menu();
Snowflake();

const newsContainer = document.querySelector('.news-container');

const PopulateNews = () =>{
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

PopulateNews(newsData);
console.table(newsData);
