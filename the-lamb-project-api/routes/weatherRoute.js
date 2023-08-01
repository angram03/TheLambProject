const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/historical-weather', async (req, res) => {
  const { city } = req.query;

  try {
    console.log("Request reached the weather route.");
    console.log("City:", city);

    const apiKey = '5979ce1951a2979902493bf710be9f6c';
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    const formattedStartDate = startDate.toISOString().split('T')[0];

    const apiUrl = `http://api.weatherstack.com/historical?access_key=${apiKey}&query=${city}&historical_date_start=${formattedStartDate}&historical_date_end=${endDate}&units=f`;

    console.log("API URL:", apiUrl);

    const response = await axios.get(apiUrl);
    const historicalData = response.data.historical;

    // Check if historical weather data exists in the API response
    if (!historicalData || Object.keys(historicalData).length === 0) {
      throw new Error('No historical weather data found in the API response');
    }

    let totalMinTemp = 0;
    let totalMaxTemp = 0;
    let count = 0;

    // Calculate today's average, minimum, and maximum temperatures
    for (const date in historicalData) {
      if (historicalData.hasOwnProperty(date)) {
        const { mintemp, maxtemp } = historicalData[date];
        totalMinTemp += mintemp;
        totalMaxTemp += maxtemp;
        count++;
      }
    }

    const todayAvgTemp = count > 0 ? totalMinTemp / count : 0;
    const todayMinTemp = count > 0 ? totalMinTemp / count : 0;
    const todayMaxTemp = count > 0 ? totalMaxTemp / count : 0;

    res.json({
      city,
      todayAvgTemp,
      todayMinTemp,
      todayMaxTemp,
    });
  } catch (error) {
    console.error('Error fetching today\'s weather data:', error.message);
    res.status(500).json({ error: 'Failed to fetch today\'s weather data' });
  }
});

module.exports = router;
