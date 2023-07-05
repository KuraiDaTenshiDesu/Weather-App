if (sessionStorage.getItem('last_query')) {
    getWeather(sessionStorage.getItem('last_query'))
}

showFavorites();

tab_now.addEventListener('click', () => {
    tab_now.classList.add('weather-main__info__tab__active');
    tab_details.classList.remove('weather-main__info__tab__active');
    tab_forecast.classList.remove('weather-main__info__tab__active');

    document.querySelector('.weather-main__info__now').style.display = 'block';
    document.querySelector('.weather-main__info__details').style.display = 'none';
    document.querySelector('.weather-main__info__forecast').style.display = 'none';
})

tab_details.addEventListener('click', () => {
    tab_details.classList.add('weather-main__info__tab__active');
    tab_now.classList.remove('weather-main__info__tab__active');
    tab_forecast.classList.remove('weather-main__info__tab__active');

    document.querySelector('.weather-main__info__now').style.display = 'none';
    document.querySelector('.weather-main__info__details').style.display = 'block';
    document.querySelector('.weather-main__info__forecast').style.display = 'none';
})

tab_forecast.addEventListener('click', () => {
    tab_forecast.classList.add('weather-main__info__tab__active');
    tab_now.classList.remove('weather-main__info__tab__active');
    tab_details.classList.remove('weather-main__info__tab__active');

    document.querySelector('.weather-main__info__now').style.display = 'none';
    document.querySelector('.weather-main__info__details').style.display = 'none';
    document.querySelector('.weather-main__info__forecast').style.display = 'block';
})

search_button.addEventListener('click', () => {
    getWeather(document.querySelector('.weather-search__input').value);
});

search_input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWeather(document.querySelector('.weather-search__input').value);
    }
})

cities_list.addEventListener('click', event => {
    getWeather(event.target.innerHTML);
})

add_to_favorites.addEventListener('click', event => editFavorites(event));