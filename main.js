function getWeather(cityName) {
    const now = `${nowURL}?q=${cityName}${querySettings}`
    const forecast = `${forecastURL}?q=${cityName}${querySettings}`;
    
    fetch(now)
        .then(result => result.json())
        .then(result => {
            console.log(`Weather now at ${cityName}: ${result.main.temp}°C`);
        })
    
    fetch(forecast)
        .then(result => result.json())
        .then(result => {
            console.log("Weather Forecast");
            result.list.forEach(object => {
                console.log(new Date(object.dt_txt));
                console.log(object.main.temp);
            })
        })
        .catch(err => console.error(err))
}

getWeather("Kirov");