import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://the-lamb-project-api.onrender.com/api/historical-weather?city=${city}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setError("Failed to fetch weather data");
      setWeatherData(null);
    }
  };

  return (
    <div className="px-8 bg-[lightblue]">
      <h1 className="font-bold">Weather</h1>
      <input
        className="px-4 py-2"
        type="text"
        value={city}
        onChange={handleInputChange}
      />
      <button
        className="bg-[#015239] text-white rounded-md px-4 py-2"
        onClick={getWeatherData}
      >
        Get Weather Data
      </button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h1 className="px-2 py-2 font-bold text-2xl">
            {" "}
            Today's {city} Temperatures
          </h1>
          <p className=" px-2 py-2 text-xl">
            🥶 Lowest Temperature: {weatherData.toaydMinTemp}°F{" "}
          </p>

          <p className="px-2 py-2 text-xl">
            🌡 Average Temperature: {weatherData.todayAvgTemp}°F{" "}
          </p>

          <div className="flex items-center px-2 py-2">
            <p className="text-xl">
              🥵 Highest Temperature: {weatherData.todayMaxTemp}°F{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
