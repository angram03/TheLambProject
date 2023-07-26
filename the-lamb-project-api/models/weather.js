// ... Import statements ...

const apiKey = 'YOUR_API_KEY';

async function getWeatherData(city, stateCode, countryCode) {
  try {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=1&appid=${apiKey}`;
    console.log('Geocoding URL:', geoUrl);

    const geoResponse = await axios.get(geoUrl);

    if (geoResponse.data.length === 0) {
      console.error('Location not found.');
      return null;
    }

    const { lat, lon } = geoResponse.data[0];
    console.log('Latitude:', lat);
    console.log('Longitude:', lon);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    console.log('Weather API URL:', weatherUrl);

    const weatherResponse = await axios.get(weatherUrl);
    console.log('Weather Data:', weatherResponse.data);

    return weatherResponse.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}

// ... Example usage ...

