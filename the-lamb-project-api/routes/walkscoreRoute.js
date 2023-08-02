// const express = require('express');
// const axios = require('axios');
// const router = express.Router();
// require("dotenv").config({path: "../.env"})

// const cities = require("../longlat.json").cities
// // function getCityWalkScore(requestedCity){

// router.get('/:city', async (req, res) => {
//     try{
//     const requestedCity = req.params.city.toLowerCase();
//     console.log("Testttt", req.params.city.toLowerCase())
// const foundCity = cities.find((city => city.name.toLowerCase() === requestedCity.toLowerCase()))
// if(!foundCity){
//     // do something cuz city was not found
//     return res.status(404).json({error: `city ${requestedCity} was not found`})
// }
// const baseURL = new URL("https://api.walkscore.com/score")
// baseURL.searchParams.append("format", "json")
// baseURL.searchParams.append("address", foundCity.name)
// baseURL.searchParams.append("lat", foundCity.latitude)
// baseURL.searchParams.append("lon", foundCity.longitude)
// baseURL.searchParams.append("transit", 1)
// baseURL.searchParams.append("bike", 1)
// baseURL.searchParams.append("wsapikey", process.env.SECRET_KEY)


// const apiUrl = baseURL.toString()

//     const apiRes = await axios.get(apiUrl)
//     const data = apiRes.data
//     return res.json(data)

// } catch(error) {
   
//     return res.status(500).json({error: "failed to fetch walkscore data"})
// }
// // async function getScores(){
// //     const walkscore = res.data.walkscore
// //     const transitScore = res.data.transit.score
// //     const bikeScore = res.data.bike.score

// //     console.log(`walk score: ${walkscore}\n transit score: ${transitScore}\n bike score: ${bikeScore}`)
    
// // }
// })

// module.exports = router

const express = require('express');
const axios = require('axios');
const router = express.Router();
require("dotenv").config({ path: "../.env" });

const cities = require("../longlat.json").cities;

router.get('/:city', async (req, res) => {
  try {
    const requestedCity = req.params.city.toLowerCase();
    const foundCity = cities.find((city) => city.name.toLowerCase() === requestedCity.toLowerCase());
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
    baseURL.searchParams.append("wsapikey", process.env.SECRET_KEY);

    const apiUrl = baseURL.toString();
    const apiRes = await axios.get(apiUrl);
    const data = apiRes.data;
    const walkscore = res.data.walkscore
 const transitScore = res.data.transit.score
const bikeScore = res.data.bike.score
console.log(walkscore)

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch walkscore data" });
  }
});


module.exports = router;

