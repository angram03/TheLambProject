import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`/api/historical-weather?city=${city}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setError('Failed to fetch weather data');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={handleInputChange} />
      <button onClick={getWeatherData}>Get Weather Data</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature}°F</p>
          <p>Weather Condition: {weatherData.weatherCondition}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
