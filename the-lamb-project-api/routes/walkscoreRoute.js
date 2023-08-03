
const express = require('express');
const axios = require('axios');
const router = express.Router();
require("dotenv").config({ path: "../.env" });

const cities = require("../longlat.json").cities;



router.get('/:city', async (req, res) => {
  try {
    const requestedCity = req.params.city
    const foundCity = cities.find((city) => city.name.toLowerCase() == requestedCity.toLowerCase());
    if (!foundCity) {
      return res.status(404).json({ error: `City ${requestedCity} was not found` });
    }
    const baseURL = new URL("https://api.walkscore.com/score");
    baseURL.searchParams.append("format", "json");
    baseURL.searchParams.append("address", foundCity.name);
    baseURL.searchParams.append("lat", foundCity.latitude);
    baseURL.searchParams.append("lon", foundCity.longitude);
    baseURL.searchParams.append("transit", 1);
    baseURL.searchParams.append("bike", 1);
    baseURL.searchParams.append("wsapikey", "b73706efff9281b026a51eeed761cc59");

    const apiUrl = baseURL.toString();
    const apiRes = await axios.get(apiUrl);
    const data = apiRes.data;
    
   console.log(data)

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch walkscore data" });
  }
});
module.exports = router;

