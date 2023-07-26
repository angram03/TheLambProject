const express = require('express');
const axios = require('axios');
const { Client } = require('pg');

const router = express.Router();

const port = process.env.PORT || 3001;

// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData(city, state, country) {
  try {
    const apiKey = '6d9bb527829de168b17822b9e0e01291'; // Replace with your OpenWeatherMap API key

    // Step 1: Use Direct Geocoding API to get geographic coordinates
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`;
    const geoResponse = await axios.get(geoUrl);

    if (geoResponse.data.length === 0) {
      throw new Error('Location not found.');
    }

    // Extract latitude and longitude from the Direct Geocoding API response
    const { lat, lon } = geoResponse.data[0];

    // Step 2: Use the retrieved coordinates in Current Weather Data API
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const weatherResponse = await axios.get(weatherUrl);

    // Extract the necessary weather data from the response
    const weatherData = {
      city,
      state,
      country,
      temperature: weatherResponse.data.main.temp,
      humidity: weatherResponse.data.main.humidity,
      wind_speed: weatherResponse.data.wind.speed,
    };

    return weatherData;
  } catch (error) {
    throw new Error('Error fetching weather data: ' + error.message);
  }
}

// Define route for fetching weather data
router.get('/api/weather/:city/:state/:country', async (req, res, next) => {
  try {
    console.log('Fetching weather data!!!');

    const { city, state, country } = req.params;

    // Fetch weather data using Axios and OpenWeatherMap API
    const weatherData = await getWeatherData(city, state, country);

    // Send weather data in the response
    return res.status(200).json(weatherData);
  } catch (err) {
    console.error('Error fetching weather data:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Define route for saving weather data to the database
router.post('/api/weather', async (req, res) => {
  const { city, state, country, temperature, humidity, wind_speed } = req.body;
  // Save weather data to the database using the pg library
  // ...

  // Send response indicating success or failure
  // ...
});

// ...

module.exports = router;
