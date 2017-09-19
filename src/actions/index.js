// axios is used to make Ajax calls. Like jQuery Plugin
import axios from 'axios';
const API_KEY = '06fae9c3fa0faff137afe9f68a81bea4';

// EX: http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// We store it in a const so it would be easier in future to change its value.
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Since in the URL we need to pass in city name and country code as q= so we have argument as city
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  // from axios documentation to make get request
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
