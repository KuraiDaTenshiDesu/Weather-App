function getWeather() {
    let cityName = document.querySelector('.weather-search__input').value;
    
    const now = `${nowURL}?q=${cityName}${querySettings}`;

    fetch(now)
        .then(answer => {
            if (!answer.ok) {
                throw new Error(`An error occured: HTTP ${answer.status}`)
            } else {
                return answer.json();
            }
        })
        .then(result => {
            if (result.weather[0].main === "Clouds") {
                now_weather.src = 'img/clouds.png';
            }
            
            now_degrees.innerHTML = `${result.main.temp}°C`;
            now_cityname.innerHTML = cityName;

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
            details_degrees.innerHTML = `Temperature: ${result.main.temp}°C`;
            details_feelslike.innerHTML = `Feels like: ${result.main["feels_like"]}°C`;
            details_weather.innerHTML = `Weather: ${result.weather[0].main}`
            details_sunrise.innerHTML = `Sunrise: ${sunrise_hours}:${sunrise_minutes}`;
            details_sunset.innerHTML = `Sunset: ${sunset_hours}:${sunset_minutes}`;

            console.log(result);
        })
}