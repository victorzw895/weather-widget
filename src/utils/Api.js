const _APIKEY = process.env.REACT_APP_OPEN_WEATHER_MAP;

// const _APIKEY = "fdf1d48f3f3951dcb129a7e4be3b7d89";
let apiUrl = "https://api.openweathermap.org/data/2.5";

const fetchWeather = city => {
  let weeklyWeatherUrl = `${apiUrl}/weather?q=${city}&APPID=${_APIKEY}`;
  return fetch(weeklyWeatherUrl).then(response => response.json());
};

export default fetchWeather;

// if response.cod = "400" handle error else if "200"
