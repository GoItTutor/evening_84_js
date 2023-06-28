'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '95632b02f9162f375a368971925f5209';

const getWeatherByCityName = cityName =>
  fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=ua&units=metric`).then(
    res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    }
  );

export default getWeatherByCityName;
