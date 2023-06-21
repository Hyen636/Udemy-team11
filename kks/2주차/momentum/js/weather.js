const weatherContainer = document.querySelector(".weather");

const API_KEY = "8b46d1d2fb5be43ae110f89a6e57cab0";

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const city = json.name;
      const temp = json.main.temp.toFixed(1);
      const weather = json.weather[0].main;
      const cityBox = document.createElement("span");
      const tempBox = document.createElement("span");
      const weatherBox = document.createElement("span");
      cityBox.innerText = city;
      tempBox.innerText = `${temp}°C`;
      weatherBox.innerText = weather;
      const container = document.createElement("div");
      container.appendChild(cityBox);
      container.appendChild(tempBox);
      container.appendChild(weatherBox);
      weatherContainer.appendChild(container);
    });
};

const init = () => {
  const onSuccess = (pos) => {
    getWeather(pos.coords.latitude, pos.coords.longitude);
  };
  const onError = (error) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

init();
