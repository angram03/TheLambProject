const express = require("express");
const amadeus = require("../models/amadeus");
const cityData = require("../cityData"); // Import the cityData module
const router = express.Router();

router.get("/safety-ratings/:cityName", async (req, res) => {
  const cityName = req.params.cityName;

  if (!(cityName in cityData)) {
    return res.status(404).json({ error: 'City not found' });
  }

  const { latitude, longitude } = cityData[cityName];

  try {
    const response = await amadeus.safety.safetyRatedLocations.get({
      latitude,
      longitude
    });

    const safetyRating = response.data[0].safetyScores.overall;
    res.json({ cityName, safetyRating });
  } catch (error) {
    console.error('Error while fetching safety ratings:', error.message);
    res.status(500).json({ error: 'Error while fetching safety ratings' });
  }
});
