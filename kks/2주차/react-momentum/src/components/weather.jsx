import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState();
  const API_KEY = "8b46d1d2fb5be43ae110f89a6e57cab0";

  const getWeather = async (lat, lon) => {
    const weatherData = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
    ).json();
    setData(weatherData);
  };

  const handleSuccess = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    getWeather(lat, lon);
  };

  const handleError = (error) => {
    console.log(error);
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  return (
    <>
      <div style={{ padding: 10, paddingRight: 20 }}>
        {data
          ? `${data.name} ${data.weather[0].main} ${data.main.temp.toFixed(
              1
            )}°C`
          : "loading"}
      </div>
    </>
  );
};

export default Weather;
