function formatDate() {
  let now = new Date();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Saturday",
    "sunday",
  ];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let week = weekDays[now.getDay()];
  if (minutes < 10) {
    return `${week} ${hour}:0${minutes}`;
  } else {
    return `${week} ${hour}:${minutes}`;
  }
}

let dayWeek = document.querySelector("#day");
dayWeek.innerHTML = formatDate(new Date());

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let cityOutput = document.querySelector("#city-description");
  cityOutput.innerHTML = city.value;
  console.log(city.value);
  let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let cityInput = document.querySelector("#form-input");
cityInput.addEventListener("submit", showCity);
//temperature change-grades celsius fahrenheit
//let temperatureF = temperature * 1.8 + 32;
// temperatureF = Math.floor(temperatureF);
function showTemperature(response) {
  let temp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = temperature;
  let minTemp = document.querySelector("#minTemperature");
  let minTemperature = Math.round(response.data.main.temp_min);
  minTemp.innerHTML = `<strong> Min Temperature </strong>: ${minTemperature} ºC`;
  let maxTemp = document.querySelector("#maxTemperature");
  let maxTemperature = Math.round(response.data.main.temp_max);
  maxTemp.innerHTML = `<strong>Max Temperature </strong>: ${maxTemperature} ºC`;
  let hum = document.querySelector("#humidity");
  let humidity = Math.round(response.data.main.humidity);
  hum.innerHTML = `<strong> Humidity </strong>: ${humidity}%`;
  let wdSp = document.querySelector("#windSpeed");
  let windSpeed = Math.round(response.data.wind.speed);
  wdSp.innerHTML = `<strong> Windspeend </strong>: ${windSpeed} km/h`;
  let description = document.querySelector("#cityWeather");
  let desc = Math.round(response.data.weather.main);
  description.innerHTML = `<strong> Current weather </strong>: ${desc}`;
}
