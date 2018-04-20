import axios from "axios";

//const API_KEY = "6a78596d062df78380eff5944c4e5567";
const API_KEY = "31a4bf75723a5673046c1d215a3f38d2";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
