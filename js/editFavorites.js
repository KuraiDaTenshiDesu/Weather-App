function editFavorites(event) {
    let cityName = add_to_favorites.dataset.cityName;

    if (!localStorage.getItem('favorites')) {
        let favorites = [cityName];
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites.indexOf(cityName) === -1) {
            favorites.push(cityName);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            let favorites = JSON.parse(localStorage.getItem('favorites'));
            let index = favorites.indexOf(cityName);
        
            favorites.splice(index, 1);
        
            localStorage.setItem('favorites', JSON.stringify(favorites));
        
            showFavorites();
        }
    }

    showFavorites();
}