// https://www.weatherbit.io/api

import getWeatherByCityName from './weather-api';

import weatherCardTemplate from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');

const cityInputEl = weatherFormEl.firstElementChild;

const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${`${date.getHours()}`.padStart(
    2,
    0
  )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};

const handleWeatherFormSubmit = event => {
  event.preventDefault();

  const searchQuery = cityInputEl.value.trim();

  if (!searchQuery) {
    return;
  }

  cityInputEl.value = '';

  getWeatherByCityName(searchQuery)
    .then(({ sys: { sunset, sunrise, ...sysData }, ...data }) => {
      const enhancedData = {
        ...data,
        sys: {
          ...sysData,
          sunrise: convertSecondsToHoursAndMinutes(sunrise),
          sunset: convertSecondsToHoursAndMinutes(sunset),
        },
      };

      weatherWrapperEl.innerHTML = weatherCardTemplate(enhancedData);
    })
    .catch(console.warn);
};

weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);
