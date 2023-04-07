import React , { useState } from 'react'
import './App.css'
import axios from 'axios'
import getWeatherDescription from './components/getWeatherDescription';
import getStyle from './components/getStyle';

function App() {

  const [city,setCity] = useState("");
  const [weather,setWeather] = useState({});
  const [date,setDate] = useState("");

  // const API_URLPM = `
  // http://api.openweathermap.org/data/2.5/air_pollution?&appid=${API_KEY}
  // `

  const getWeather = async (e) => {
    e.preventDefault();
    try {

      const API_KEY ="b27b39ae23a8741036216125f9f34391"
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  //       const API_URLPM = `
  // http://api.openweathermap.org/data/2.5/air_pollution?&appid=${API_KEY}
  // `

      const response = await axios.get(API_URL);
      const tempCelsius = convertKelvinToCelsius(response.data.main.temp);
      setWeather({
        temperature: tempCelsius,
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        description: response.data.weather.description,
      });
      setDate(new Date().toLocaleDateString());
    } catch (error) {
      console.error();
    }
  };

  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  }

  return (
    <div className={ typeof weather.temperature != "undefined"
    ? weather.temperature > 25
    ? "App hot"
    : "App cold"
    : "App"}>
      <main>
        <div className="search-container">
          <form onSubmit={getWeather}>
          <input 
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter city name' 
          className='search-bar'/>
          </form>
        </div>
        <div>
          <div className="location-container">
            <div className="location">
              <h1>{city}</h1>
            </div>
            <div className="date">
              {date}
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.temperature)} °C
              </div>
              <div className="weather">
              <p>Pressure: {weather.pressure} hPa</p>
              <p>Humidity: {weather.humidity}%</p>
              <p>Wind Speed: {weather.windSpeed} m/s</p>
              <p>{weather.description}</p>
              <p style={getStyle(getWeatherDescription(weather.temperature))}>{getWeatherDescription(weather.temperature)}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
