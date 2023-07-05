function getWeather(cityName) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const now = `${nowURL}?q=${cityName}${querySettings}`;
    const forecast = `${forecastURL}?q=${cityName}${querySettings}`;

    fetch(now)
        .then(answer => {
            if (!answer.ok) {
                if (answer.status === 404) {
                    alert(`City "${cityName}" is not found`);
                    throw new Error(`City "${cityName}" is not found`);
                }

                throw new Error(`Unexpected Error`)
            } else {
                return answer.json();
            }
        })
        .then(result => {
            sessionStorage.setItem('last_query', cityName);

            switch (result.weather[0].main) {
                case "Clouds":
                    now_weather.src = 'img/clouds.png';
                    break;
                case "Rain":
                    now_weather.src = 'img/rain.png';
                    break;
                case "Clear":
                    now_weather.src = 'img/sun.png';
                    break;
                default:
                    now_weather.src = 'img/cloudy.png';
                    break;
            }
            
            now_degrees.innerHTML = `${Math.round(result.main.temp)}°C`;
            now_cityname.innerHTML = cityName;
            add_to_favorites.innerHTML = '<img src="img/favorites.png">';
            add_to_favorites.dataset.cityName = cityName;

            let sunrise_full_date = new Date(result.sys.sunrise * 1000);
            let sunset_full_date = new Date(result.sys.sunset * 1000);

            let sunrise_hours = sunrise_full_date.getHours();
            let sunrise_minutes = sunrise_full_date.getMinutes();

            let sunset_hours = sunset_full_date.getHours();
            let sunset_minutes = sunset_full_date.getMinutes();

            if (sunrise_hours < 10) {
                sunrise_hours = `0${sunrise_hours}`;
            }

            if (sunrise_minutes < 10) {
                sunrise_minutes = `0${sunrise_minutes}`;
            }

            if (sunset_hours < 10) {
                sunset_hours = `0${sunset_hours}`;
            }

            if (sunset_minutes < 10) {
                sunset_minutes = `0${sunset_minutes}`;
            }

            details_cityname.innerHTML = cityName;
            details_degrees.innerHTML = `Temperature: ${Math.round(result.main.temp)}°C`;
            details_feelslike.innerHTML = `Feels like: ${Math.round(result.main["feels_like"])}°C`;
            details_weather.innerHTML = `Weather: ${result.weather[0].main}`
            details_sunrise.innerHTML = `Sunrise: ${sunrise_hours}:${sunrise_minutes}`;
            details_sunset.innerHTML = `Sunset: ${sunset_hours}:${sunset_minutes}`;
        })
        .catch(error => console.log(error))
    
    fetch(forecast)
        .then(answer => answer.json())
        .then(result => {
            forecast_container.innerHTML = ``;

            result.list.forEach((data) => {
                let date = new Date(data.dt * 1000);

                let src = ``;

                let hours = date.getHours();
                let minutes = date.getMinutes();

                if (hours < 10) {
                    hours = `0${hours}`;
                }

                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }

                switch (data.weather[0].main) {
                    case "Clouds":
                        src = 'img/clouds.png';
                        break;
                    case "Rain":
                        src = 'img/rain.png';
                        break;
                    case "Clear":
                        src = 'img/sun.png';
                        break;
                    default:
                        src = 'img/cloudy.png';
                        break;
                }

                let html = `
                    <div class="weather-main__info__forecast__data">
                        <span class="weather-main__info__forecast__data__date">${date.getDate()} ${months[date.getMonth()]}</span>
                        <span class="weather-main__info__forecast__data__time">${hours}:${minutes}</span>
                        <p class="weather-main__info__forecast__data__degrees">Temperature: ${Math.round(data.main.temp)}°C</p>
                        <p class="weather-main__info__forecast__data__feels-like">Feels like: ${Math.round(data.main.feels_like)}°C</p>
                        <span class="weather-main__info__forecast__data__weather">${data.weather[0].main}</span>
                        <img class="weather-main__info__forecast__data__icon" src="${src}">
                    </div>
                `;

                forecast_container.innerHTML += html;
            })
        })
        .catch(error => console.log(error))
}