const axios = require('axios');
const { NotFoundError } = require('./utils/errors');


// Example of an API route to fetch scores for a city from the Teleport API
app.get('/api/city/:cityName/scores', async (req, res, next) => {
  const cityName = req.params.cityName;

  try {
    const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`);
    const scores = response.data;
    res.json(scores);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return next(new NotFoundError('City scores not found on Teleport API.'));
    }
    console.error('Error fetching scores:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Example API route to insert city scores into the database
app.post('/api/city/:cityName/scores', async (req, res) => {
    const cityName = req.params.cityName;
    const {
      housingScore,
      costOfLivingScore,
      startupScore,
      ventureCapitalScore,
      /* add more scores I want to implement  */
    } = req.body;
  
    try {
      const query = `
        INSERT INTO city_scores (city_name, housing_score, cost_of_living_score, startup_score, venture_capital_score)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const values = [cityName, housingScore, costOfLivingScore, startupScore, ventureCapitalScore /* add other score values */];
      const result = await pool.query(query, values);
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error adding city scores:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  