function showFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    cities_list.innerHTML = ``;
    let html = ``;

    if (favorites) {
        favorites.forEach((name) => {
            html += `<li class="weather-main__cities__list__city">${name}</li>`;
        })
    }

    cities_list.innerHTML = html;
}