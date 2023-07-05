const search_button = document.querySelector('.weather-search__button');
const search_input = document.querySelector('.weather-search__input')

const now_degrees = document.getElementById('now-degrees');
const now_weather = document.getElementById('now-weather');
const now_cityname = document.getElementById('now-cityname');
const add_to_favorites = document.querySelector('.weather-main__info__now__add-to-favorites');

const details_cityname = document.getElementById('details-cityname');
const details_degrees = document.getElementById('details-degrees');
const details_feelslike = document.getElementById('details-feelslike');
const details_weather = document.getElementById('details-weather');
const details_sunrise = document.getElementById('details-sunrise');
const details_sunset = document.getElementById('details-sunset');

const cities_list = document.querySelector('.weather-main__cities__list');

const forecast_container = document.querySelector('.weather-main__info__forecast');

const tab_now = document.getElementById('now');
const tab_details = document.getElementById('details');
const tab_forecast = document.getElementById('forecast');