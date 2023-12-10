const apiKey = 'bfa615244c7d5bdb27755a2f1854a14f'; // Get your API key from OpenWeatherMap
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput'); // Get your location
const searchButton = document.getElementById('searchButton'); // Get your search
const cityElement = document.getElementById('city');        // Get your city
const temperatureElement = document.getElementById('temperature');   // Get your temperature
const descriptionElement = document.getElementById('description'); // Get your description
const humidityElement = document.getElementById('humidity');     // Get your humidity
const windElement = document.getElementById('wind');    // Get your wind
const weatherIcon = document.getElementById('img');   // Get image icon
const container = document.querySelector(".container") // Get weather box
const weatherBox = document.querySelector(".weather-box") // Get weather box
const weatherDetails = document.querySelector(".weather-details") // Get details box
const error404 = document.querySelector('.not-found');  // Error message


function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfa615244c7d5bdb27755a2f1854a14f&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {

      if (data.cod == '404') {
        container.style.height = '450px';
        weatherBox. classList. remove('active');
        weatherDetails. classList. remove('active');
        error404.classList.add('active');
        return;
      }
        container.style.height = '550px';
        weatherBox. classList.add('active');
        weatherDetails.classList.add('active');
        error404. classList.remove('active') ;

      cityElement.innerHTML = data.name;
      descriptionElement.innerHTML = data.weather[0].main;
      temperatureElement.innerHTML = `${Math.round(data.main.temp)}°C`;
      humidityElement.innerHTML = `${data.main.humidity}°C`;
      windElement.innerHTML = `${data.wind.speed}km/h`;

      switch (data.weather[0].main) {
        case "Clear":
          weatherIcon.src = 'images/clear.png';
          break;
      
        case "Rain":
          weatherIcon.src = 'images/rain.png';
          break;
      
        case "Snow":
          weatherIcon.src = 'images/snow.png';
          break;
      
        case "Mist":
          weatherIcon.src = 'images/mist.png';
          break;
      
        case "Haze":
          weatherIcon.src = 'images/cloud.png';
          break;
      
        case "Fog":
          weatherIcon.src = 'images/cloud.png';
          break;
      
        case "Clouds":
          weatherIcon.src = 'images/cloud.png';
          break;
      
        default:
          weatherIcon.src ="images/cloud.png";
          break;
      }

    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
searchButton.addEventListener('click', () => {
  const city = locationInput.value;
  if (city) {
    fetchWeather(city);
  }
});

